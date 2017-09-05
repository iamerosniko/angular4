import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I404Component } from './smd_i404/i404.component'

const routes: Routes = [
  { path: '404', component: I404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
