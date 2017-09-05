import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTitleRoutingModule } from './create_title-routing.module';

import { CreateTitleComponent } from './create_title.component';

@NgModule({
  imports: [
    CommonModule,
    CreateTitleRoutingModule
  ],
  declarations: [
    CreateTitleComponent
  ],
  providers:[
    //long hand form
  //   {
  //     provide:'canDeactivateCreateTitle',
  //     useValue: checkDirtyState
  //   }
  ],
  exports: [
    CreateTitleComponent 
  ]
})
export class CreateTitleModule { }

  // function checkDirtyState(component:CreateTitleComponent) {
  //   if (component.isDirty)
  //     return window.confirm('Info not save, are you sure you want to cancell?');

  //   return true;
  // }

