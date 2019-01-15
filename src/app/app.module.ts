import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule, FooModule} from 'ea-ui';
import { TypographyTestComponent } from './typography-test/typography-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
