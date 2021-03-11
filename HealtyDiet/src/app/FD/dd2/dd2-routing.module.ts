import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dd2Page } from './dd2.page';

const routes: Routes = [
  {
    path: '',
    component: Dd2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dd2PageRoutingModule {}
