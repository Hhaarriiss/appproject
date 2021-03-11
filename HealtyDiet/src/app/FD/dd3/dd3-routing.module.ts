import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dd3Page } from './dd3.page';

const routes: Routes = [
  {
    path: '',
    component: Dd3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dd3PageRoutingModule {}
