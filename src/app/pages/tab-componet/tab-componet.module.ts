import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabComponetPageRoutingModule } from './tab-componet-routing.module';

import { TabComponetPage } from './tab-componet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabComponetPageRoutingModule
  ],
  declarations: [TabComponetPage]
})
export class TabComponetPageModule {}
