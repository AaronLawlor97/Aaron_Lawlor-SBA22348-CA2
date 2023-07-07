import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechDetailsPage } from './tech-details.page';

const routes: Routes = [
  {
    path: '',
    component: TechDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechDetailsPageRoutingModule {}
