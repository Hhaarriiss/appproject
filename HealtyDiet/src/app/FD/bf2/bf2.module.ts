import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BF2PageRoutingModule } from './bf2-routing.module';

import { BF2Page } from './bf2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BF2PageRoutingModule
  ],
  declarations: [BF2Page]
})
export class BF2PageModule {}
