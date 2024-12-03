import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
      },
      {
        path: 'tournaments',
        loadChildren: () => import('./tournaments/tournaments.module').then( m => m.TournamentsPageModule)
      },
      {
        path: 'fanart',
        loadChildren: () => import('./fanart/fanart.module').then( m => m.FanartPageModule)
      },
    ]
  },
  {
    path: 'fanart',
    loadChildren: () => import('./fanart/fanart.module').then( m => m.FanartPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
