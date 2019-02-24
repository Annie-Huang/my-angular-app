import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule, FooModule, EuiFormsModule, TextfieldModule, SpinnerModule } from '@ea/ea-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TextfieldTestComponent } from './textfield-test/textfield-test.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { TypographyTestComponent } from './typography-test/typography-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyTestComponent,
    TestcompComponent,
    HomeComponent,
    TextfieldTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FooModule,
    ReactiveFormsModule,
    EuiFormsModule,
    TextfieldModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
