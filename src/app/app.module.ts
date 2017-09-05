import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Ng2Datetime } from 'ng2-datetime-picker';
import { AppRoutingModule } from './app-routing.module';
import { TitleModule } from './mod_title/title.module';
import { CreateTitleModule } from './mod_create_title/create_title.module';
import { InfoModule } from './com_info/info.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TitleModule,
    CreateTitleModule,
    InfoModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
