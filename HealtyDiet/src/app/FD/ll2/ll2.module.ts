import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ll2PageRoutingModule } from './ll2-routing.module';

import { Ll2Page } from './ll2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ll2PageRoutingModule
  ],
  declarations: [Ll2Page]
})
export class Ll2PageModule {}
