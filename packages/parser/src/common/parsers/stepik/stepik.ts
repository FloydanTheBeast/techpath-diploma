import type { Nullable } from '@shared/types';
import { sleep } from '@shared/utils';
import axios from 'axios';

import {
  StepikCourseData,
  StepikCourseReviewSummary,
  StepikCourseReviewSummaryResponse,
  StepikCoursesResponse,
} from './types';
import { mapStepikDifficulty } from './utils';
import { UnprocessedCourse } from '../../types/course';
import { BaseParser } from '../baseParser';

export class StepikParser extends BaseParser {
  private readonly baseApiUrl = 'https://stepik.org/api';
  private readonly pageSize = 10;

  async parse() {
    let res: Nullable<StepikCoursesResponse> = null;
    let page = 400;

    do {
      console.log(`[Stepik] Parsing page ${page}`);
      try {
        res = await (
          await axios.get<StepikCoursesResponse>(
            `${this.baseApiUrl}/courses?page=${++page}&page_size=${this.pageSize}&is_public=true`,
          )
        ).data;

        res?.courses.forEach(async course => {
          const courseReviewSummary = (
            await axios.get<StepikCourseReviewSummaryResponse>(
              `${this.baseApiUrl}/course-review-summaries/${course.review_summary}`,
            )
          ).data['course-review-summaries'][0];

          if (courseReviewSummary?.count && courseReviewSummary.average < 4) {
            return;
          }

          this.processCourse(
            { ...course, average: courseReviewSummary?.average, count: courseReviewSummary?.count },
            this.convertCourseData,
          );
        });
      } catch (error) {
        console.log(`An error occured while parsing Stepik: ${error}`);
      }
      await sleep(2000);
    } while (res?.meta.has_next && page < 450);
  }

  private convertCourseData(
    courseData: StepikCourseData & Partial<Pick<StepikCourseReviewSummary, 'average' | 'count'>>,
  ): UnprocessedCourse {
    return {
      platform: 'Stepik',
      url: courseData.canonical_url,
      title: courseData.title,
      description: courseData.description,
      // languages: [courseData.language], NOTE: Info is not reliable
      price: courseData.price
        ? {
            price: courseData.price,
            currencyCodeISO: 'RUB',
          }
        : null,
      difficulty: mapStepikDifficulty(courseData.difficulty),
      rating: courseData.average,
      ratingsCount: courseData.count,
    };
  }
}
