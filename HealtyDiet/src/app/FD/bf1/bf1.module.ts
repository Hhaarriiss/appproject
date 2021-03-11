import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BF1PageRoutingModule } from './bf1-routing.module';

import { BF1Page } from './bf1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BF1PageRoutingModule
  ],
  declarations: [BF1Page]
})
export class BF1PageModule {}
