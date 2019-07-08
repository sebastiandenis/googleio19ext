import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './containers/events.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventsComponent, EventsListComponent, EventItemComponent],
  imports: [
    CommonModule, EventsRoutingModule, MaterialModule, SharedModule
  ]
})
export class EventsModule { }
