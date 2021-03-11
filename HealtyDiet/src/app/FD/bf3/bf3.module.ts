import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BF3PageRoutingModule } from './bf3-routing.module';

import { BF3Page } from './bf3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BF3PageRoutingModule
  ],
  declarations: [BF3Page]
})
export class BF3PageModule {}
