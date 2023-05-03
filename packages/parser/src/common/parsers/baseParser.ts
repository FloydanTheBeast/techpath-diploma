import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { Parser } from '../types';
import { UnprocessedCourse } from '../types/course';

@Injectable()
export class BaseParser implements Parser {
  // public coursesService: ClientProxy;

  constructor(@Inject('COURSES_SERVICE') public readonly coursesService: ClientProxy) {
    this.coursesService = coursesService;
  }

  public async parse() {
    return;
  }

  public processCourse<T>(course: T, converter: (course: T) => UnprocessedCourse): void {
    this.coursesService.emit('unprocessed_course', converter(course));
  }
}
