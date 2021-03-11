import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ll1Page } from './ll1.page';

const routes: Routes = [
  {
    path: '',
    component: Ll1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ll1PageRoutingModule {}
