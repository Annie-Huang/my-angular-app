import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule, FooModule, EuiFormsModule, TextfieldModule, SpinnerModule, ModalModule, MessageModule, MessageService, DropdownModule} from '@ea/ea-ui';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextfieldTestComponent } from './textfield-test/textfield-test.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { TypographyTestComponent } from './typography-test/typography-test.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownTestComponent } from './dropdown-test/dropdown-test.component';
import { RadiobuttonTestComponent } from './radiobutton-test/radiobutton-test.component';
import { TextareaTestComponent } from './textarea-test/textarea-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyTestComponent,
    TestcompComponent,
    HomeComponent,
    TextfieldTestComponent,
    ModalComponent,
    DropdownTestComponent,
    RadiobuttonTestComponent,
    TextareaTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FooModule,
    ReactiveFormsModule,
    EuiFormsModule,
    TextfieldModule,
    SpinnerModule,
    ModalModule,
    MessageModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
