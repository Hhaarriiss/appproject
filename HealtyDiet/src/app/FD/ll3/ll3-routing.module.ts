import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ll3Page } from './ll3.page';

const routes: Routes = [
  {
    path: '',
    component: Ll3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ll3PageRoutingModule {}
