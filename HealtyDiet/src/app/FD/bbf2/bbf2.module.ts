import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bbf2PageRoutingModule } from './bbf2-routing.module';

import { Bbf2Page } from './bbf2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bbf2PageRoutingModule
  ],
  declarations: [Bbf2Page]
})
export class Bbf2PageModule {}
