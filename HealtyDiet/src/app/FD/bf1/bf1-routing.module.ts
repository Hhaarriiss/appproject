import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BF1Page } from './bf1.page';

const routes: Routes = [
  {
    path: '',
    component: BF1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BF1PageRoutingModule {}
