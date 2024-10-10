import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFavoritePage } from './register-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFavoritePageRoutingModule {}
