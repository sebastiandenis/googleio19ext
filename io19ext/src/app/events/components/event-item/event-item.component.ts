import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input()
  event: IEvent;
  
  constructor() { }

  ngOnInit() {
  }

}
