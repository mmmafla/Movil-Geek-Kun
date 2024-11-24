import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StwPage } from './stw.page';

const routes: Routes = [
  {
    path: '',
    component: StwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StwPageRoutingModule {}
