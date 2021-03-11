import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bff3Page } from './bff3.page';

const routes: Routes = [
  {
    path: '',
    component: Bff3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bff3PageRoutingModule {}
