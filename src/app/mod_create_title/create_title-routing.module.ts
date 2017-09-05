import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTitleComponent } from './create_title.component';

const routes: Routes = [
  { path: 'createtitle', component: CreateTitleComponent,
      //use a function that is declared in the provider
      canDeactivate: ['canDeactivateCreateTitle']}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateTitleRoutingModule { }
