import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dd1PageRoutingModule } from './dd1-routing.module';

import { Dd1Page } from './dd1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dd1PageRoutingModule
  ],
  declarations: [Dd1Page]
})
export class Dd1PageModule {}
