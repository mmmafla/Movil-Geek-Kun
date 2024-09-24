import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StwPageRoutingModule } from './stw-routing.module';

import { StwPage } from './stw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StwPageRoutingModule
  ],
  declarations: [StwPage]
})
export class StwPageModule {}
