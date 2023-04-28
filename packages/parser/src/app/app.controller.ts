import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('COURSES_SERVICE') private readonly coursesService: ClientProxy,
  ) {}

  @Get()
  getData() {
    this.coursesService.emit('test', { test: 123 });
    return this.appService.getData();
  }
}
