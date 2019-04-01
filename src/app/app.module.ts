import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextfieldTestComponent } from './textfield-test/textfield-test.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TextfieldModule, EuiFormsModule } from '@ea/ea-ui';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextfieldTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EuiFormsModule,
    TextfieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
