import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';

import { InfoComponent } from './info.component';
import { I404Component } from './smd_i404/i404.component';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  declarations: [
    InfoComponent,
    I404Component
  ],
  exports:[
    InfoComponent
  ]
})
export class InfoModule { }
