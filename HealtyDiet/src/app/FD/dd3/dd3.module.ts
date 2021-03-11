import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dd3PageRoutingModule } from './dd3-routing.module';

import { Dd3Page } from './dd3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dd3PageRoutingModule
  ],
  declarations: [Dd3Page]
})
export class Dd3PageModule {}
