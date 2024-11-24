import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvarmundoPage } from './salvarmundo.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarmundoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvarmundoPageRoutingModule {}
