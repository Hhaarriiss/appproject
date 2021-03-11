import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bff3PageRoutingModule } from './bff3-routing.module';

import { Bff3Page } from './bff3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bff3PageRoutingModule
  ],
  declarations: [Bff3Page]
})
export class Bff3PageModule {}
