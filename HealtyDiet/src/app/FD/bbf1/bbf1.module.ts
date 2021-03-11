import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bbf1PageRoutingModule } from './bbf1-routing.module';

import { Bbf1Page } from './bbf1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bbf1PageRoutingModule
  ],
  declarations: [Bbf1Page]
})
export class Bbf1PageModule {}
