import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvarmundoPageRoutingModule } from './salvarmundo-routing.module';

import { SalvarmundoPage } from './salvarmundo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvarmundoPageRoutingModule
  ],
  declarations: [SalvarmundoPage]
})
export class SalvarmundoPageModule {}
