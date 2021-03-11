import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ll3PageRoutingModule } from './ll3-routing.module';

import { Ll3Page } from './ll3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ll3PageRoutingModule
  ],
  declarations: [Ll3Page]
})
export class Ll3PageModule {}
