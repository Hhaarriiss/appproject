import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L1Page } from './l1.page';

const routes: Routes = [
  {
    path: '',
    component: L1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L1PageRoutingModule {}
