import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L2Page } from './l2.page';

const routes: Routes = [
  {
    path: '',
    component: L2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L2PageRoutingModule {}
