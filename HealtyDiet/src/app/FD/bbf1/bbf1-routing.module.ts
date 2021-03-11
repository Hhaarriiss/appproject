import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bbf1Page } from './bbf1.page';

const routes: Routes = [
  {
    path: '',
    component: Bbf1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bbf1PageRoutingModule {}
