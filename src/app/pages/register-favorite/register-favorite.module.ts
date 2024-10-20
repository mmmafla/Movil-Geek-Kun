import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFavoritePageRoutingModule } from './register-favorite-routing.module';

import { RegisterFavoritePage } from './register-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFavoritePageRoutingModule
  ],
  declarations: [RegisterFavoritePage]
})
export class RegisterFavoritePageModule {}
