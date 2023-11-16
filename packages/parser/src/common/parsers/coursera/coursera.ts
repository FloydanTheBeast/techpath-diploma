import { Nullable } from '@shared/types';
import { PlaywrightCrawler } from 'crawlee';

import { mapCourseraDifficulty } from './utils';
import { BaseParser } from '../baseParser';

enum RequestLabel {
  coursePage = 'COURSE_PAGE',
}

const DESCRIPTION_SELECTOR = '.cds-33.css-ngtbbz.cds-35, .description p, .css-1581nod .css-1xvagko';

export class CourseraParser extends BaseParser {
  async parse() {
    const crawler = new PlaywrightCrawler({
      requestHandler: async ({ request, enqueueLinks, page }) => {
        if (request.label === RequestLabel.coursePage) {
          // page.waitForLoadState('networkidle', { timeout: 3000 });

          const title = await page.locator('h1').first().textContent();

          await page.waitForSelector(DESCRIPTION_SELECTOR, {
            timeout: 10_000,
          });
          const description = await (
            await page.locator(DESCRIPTION_SELECTOR).allInnerTexts()
          )
            .map(text => `<p>${text}</p>`)
            .join('\n')
            .replace(/\n+/g, '\n');

          let difficulty: Nullable<string>;
          try {
            difficulty =
              (await (
                await page
                  .locator(
                    '.cds-63.css-awbo3i.cds-65.cds-grid-item.cds-132 .cds-33.css-s6kthz.cds-35',
                  )
                  .all()
              )[1]?.textContent({ timeout: 1_000 })) ||
              (await page
                .locator('._16ni8zai.m-b-0.m-t-1s', {
                  hasText: /(beginner|intermidiate|advanced)/i,
                })
                .first()
                .innerText({ timeout: 1_000 }));
          } catch (error) {}

          let rating: Nullable<number>;
          let ratingsCount: Nullable<number>;
          try {
            rating = Number(
              await (
                await page.locator('[data-test="number-star-rating"]').innerText({ timeout: 1000 })
              ).split('\n')[0],
            );

            ratingsCount = Number(
              await (
                await page
                  .locator('[data-test="ratings-count-without-asterisks"]')
                  .innerText({ timeout: 1000 })
              )
                .split(' ')[0]
                ?.replace(/\D/g, ''),
            );
          } catch (error) {}

          if (!title || (rating && rating < 4)) {
            return;
          }

          this.emitCourseData({
            platform: 'Coursera',
            url: request.url,
            title,
            description,
            difficulty: mapCourseraDifficulty(difficulty),
            rating,
            ratingsCount,
          });
        } else {
          await Promise.all([
            enqueueLinks({
              selector: 'div[data-testid="linksColumn"] a',
              label: RequestLabel.coursePage,
            }),
          ]);
        }
      },
    });

    crawler.run(
      new Array(40)
        .fill(0)
        .map((_, i) => `https://www.coursera.org/directory/courses?page=${i + 61}`),
    );
  }
}
