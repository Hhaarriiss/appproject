import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dd1Page } from './dd1.page';

const routes: Routes = [
  {
    path: '',
    component: Dd1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dd1PageRoutingModule {}
