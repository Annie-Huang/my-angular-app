import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule, FooModule} from 'ea-ui';
import { TypographyTestComponent } from './typography-test/typography-test.component';
import { TestcompComponent } from './testcomp/testcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyTestComponent,
    TestcompComponent
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
