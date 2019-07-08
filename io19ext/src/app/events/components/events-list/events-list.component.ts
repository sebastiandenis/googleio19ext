import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/models/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @Input()
  events: IEvent[];

  constructor() { }

  ngOnInit() {
  }

}
