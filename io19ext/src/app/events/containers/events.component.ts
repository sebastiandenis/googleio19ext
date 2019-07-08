import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/event.model';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  // events: IEvent[] = [
  //   {
  //     name: 'Google I/O 19 Ext Radzymin',
  //     description: 'To jest opis eventu',
  //     photoUrl: 'https://secure.meetupstatic.com/photos/event/e/9/c/b/highres_480839851.jpeg'
  //   },
  //   {
  //     name: 'GDG Radzymin #7',
  //     description: '7 event GDG Radzymin',
  //     photoUrl: 'https://secure.meetupstatic.com/photos/event/c/a/9/a/highres_478491866.jpeg'
  //   },
  //   {
  //     name: 'DevFest Radzymin',
  //     description: 'DevFest Radzymin w 2018',
  //     photoUrl: 'https://secure.meetupstatic.com/photos/event/e/4/2/5/highres_475438405.jpeg'
  //   }
  // ];

  events$: Observable<IEvent[]>;

  constructor(public eventsService: EventsService) { }

  ngOnInit() {
    // this.events$ = this.eventsService.getEventsFromBackend();
    this.events$ = this.eventsService.getEventsFromFirebase();
  }

}
