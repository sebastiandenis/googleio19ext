import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IEvent } from './models/event.model';

@Controller('events')
export class EventsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEvents(): IEvent[] {
    return this.appService.getEvents();
  }
}
