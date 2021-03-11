import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ll1PageRoutingModule } from './ll1-routing.module';

import { Ll1Page } from './ll1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ll1PageRoutingModule
  ],
  declarations: [Ll1Page]
})
export class Ll1PageModule {}
