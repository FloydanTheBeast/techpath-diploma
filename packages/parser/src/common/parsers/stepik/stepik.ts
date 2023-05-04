import type { Nullable } from '@shared/types';
import { sleep } from '@shared/utils';
import axios from 'axios';

import { StepikCourseData, StepikCoursesResponse } from './types';
import { UnprocessedCourse } from '../../types/course';
import { BaseParser } from '../baseParser';

export class StepikParser extends BaseParser {
  private readonly baseApiUrl = 'https://stepik.org/api/courses';
  private readonly pageSize = 10;

  async parse() {
    let res: Nullable<StepikCoursesResponse> = null;
    let page = 1;

    do {
      console.log(`[Stepik] Parsing page ${page}`);
      try {
        res = await (
          await axios.get<StepikCoursesResponse>(
            `${this.baseApiUrl}?page=${++page}&page_size=${this.pageSize}&is_public=true`,
          )
        ).data;
      } catch (error) {
        console.log(error);
      }

      res?.courses.forEach(course => this.processCourse(course, this.convertCourseData));
      await sleep(2000);
    } while (res?.meta.has_next && page < 10);
  }

  private convertCourseData(courseData: StepikCourseData): UnprocessedCourse {
    return {
      title: courseData.title,
      description: courseData.summary,
      url: courseData.canonical_url,
      platform: 'Stepik',
      languages: [courseData.language],
      price: courseData.price
        ? {
            price: courseData.price,
            currencyCodeISO: 'RUB',
          }
        : null,
    };
  }
}
