import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BF2Page } from './bf2.page';

const routes: Routes = [
  {
    path: '',
    component: BF2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BF2PageRoutingModule {}
