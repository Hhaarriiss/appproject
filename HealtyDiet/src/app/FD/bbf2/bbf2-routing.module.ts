import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bbf2Page } from './bbf2.page';

const routes: Routes = [
  {
    path: '',
    component: Bbf2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bbf2PageRoutingModule {}
