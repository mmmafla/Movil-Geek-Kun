import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabComponetPage } from './tab-componet.page';

const routes: Routes = [
  {
    path: '',
    component: TabComponetPage,
    children: [
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'stw',
        loadChildren: () => import('../stw/stw.module').then(m => m.StwPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path:'',
        redirectTo:'/tab-componet/news',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tab-componet/news',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabComponetPageRoutingModule {}