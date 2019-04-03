import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextfieldTestComponent } from './textfield-test/textfield-test.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TextfieldModule, EuiFormsModule, FooModule } from '@ea/ea-ui';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextfieldTestComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EuiFormsModule,
    TextfieldModule,
    FooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
