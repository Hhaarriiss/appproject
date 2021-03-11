import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L3PageRoutingModule } from './l3-routing.module';

import { L3Page } from './l3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L3PageRoutingModule
  ],
  declarations: [L3Page]
})
export class L3PageModule {}
