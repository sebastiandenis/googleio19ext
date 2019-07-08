import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './containers/about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
