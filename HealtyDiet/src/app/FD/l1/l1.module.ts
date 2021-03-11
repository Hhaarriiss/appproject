import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L1PageRoutingModule } from './l1-routing.module';

import { L1Page } from './l1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L1PageRoutingModule
  ],
  declarations: [L1Page]
})
export class L1PageModule {}
