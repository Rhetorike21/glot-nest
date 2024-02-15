import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getTokenAmounts(@Body() body: { sentence: string }): number {
    return this.appService.getTokenAmounts(body.sentence);
  }
}
