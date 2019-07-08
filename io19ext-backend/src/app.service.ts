import { Injectable } from '@nestjs/common';
import { IEvent } from './models/event.model';

@Injectable()
export class AppService {
  private events: IEvent[] = [
    {
      name: 'Google I/O 19 Ext Radzymin',
      description: 'To jest opis eventu',
      photoUrl: 'https://secure.meetupstatic.com/photos/event/e/9/c/b/highres_480839851.jpeg'
    },
    {
      name: 'GDG Radzymin #7',
      description: '7 event GDG Radzymin',
      photoUrl: 'https://secure.meetupstatic.com/photos/event/c/a/9/a/highres_478491866.jpeg'
    },
    {
      name: 'DevFest Radzymin',
      description: 'DevFest Radzymin w 2018',
      photoUrl: 'https://secure.meetupstatic.com/photos/event/e/4/2/5/highres_475438405.jpeg'
    },
    {
      name: 'GDG Radzymin #1',
      description: 'Pierwszy event GDG Radzymin',
      photoUrl: 'https://secure.meetupstatic.com/photos/event/1/0/9/c/highres_474544252.jpeg'
    }
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getEvents(): IEvent[] {
    return this.events;
  }
}
