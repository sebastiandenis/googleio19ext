import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventsComponent } from './containers/events.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EventsRoutingModule { }