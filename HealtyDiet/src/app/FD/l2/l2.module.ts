import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L2PageRoutingModule } from './l2-routing.module';

import { L2Page } from './l2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L2PageRoutingModule
  ],
  declarations: [L2Page]
})
export class L2PageModule {}
