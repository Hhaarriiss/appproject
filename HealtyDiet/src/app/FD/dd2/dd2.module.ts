import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dd2PageRoutingModule } from './dd2-routing.module';

import { Dd2Page } from './dd2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dd2PageRoutingModule
  ],
  declarations: [Dd2Page]
})
export class Dd2PageModule {}
