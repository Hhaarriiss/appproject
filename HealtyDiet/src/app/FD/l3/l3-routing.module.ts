import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L3Page } from './l3.page';

const routes: Routes = [
  {
    path: '',
    component: L3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L3PageRoutingModule {}
