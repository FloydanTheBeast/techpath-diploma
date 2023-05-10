import { CheerioCrawler } from 'crawlee';

import { BaseParser } from '../baseParser';

enum RequestLabel {
  coursePage = 'COURSE_PAGE',
}

export class CourseraParser extends BaseParser {
  async parse() {
    const crawler = new CheerioCrawler({
      requestHandler: async ({ request, enqueueLinks, $ }) => {
        if (request.label === RequestLabel.coursePage) {
          const title = $('h1').text();
          const description = $('.cds-33.css-ngtbbz.cds-35, .description p')
            .map((_, el) => $(el).text())
            .toArray()
            .join(' ');

          title &&
            this.emitCourseData({
              url: request.url,
              platform: 'Coursera',
              title,
              description,
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
      new Array(5)
        .fill(0)
        .map((_, i) => `https://www.coursera.org/directory/courses?page=${i + 1}`),
    );
  }
}
