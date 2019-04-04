import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule, EuiFormsModule, TextfieldModule, SpinnerModule, ModalModule, MessageModule, MessageService,
  DropdownModule, RadioButtonGroupModule, ButtonGroupModule, TextareaModule, CheckboxModule, AutoCompleteModule} from '@ea/ea-ui';
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
import { ButtongroupTestComponent } from './buttongroup-test/buttongroup-test.component';
import { CheckboxTestComponent } from './checkbox-test/checkbox-test.component';
import { AutocompleteTestComponent } from './autocomplete-test/autocomplete-test.component';
import { Fielderror1TestComponent } from './fielderror1-test/fielderror1-test.component';
import { Fielderror2TestComponent } from './fielderror2-test/fielderror2-test.component';
import { Fielderror3TestComponent } from './fielderror3-test/fielderror3-test.component';
import { Form3ChildComponent } from './fielderror3-test/form3-child.component';

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
    TextareaTestComponent,
    ButtongroupTestComponent,
    CheckboxTestComponent,
    AutocompleteTestComponent,
    Fielderror1TestComponent,
    Fielderror2TestComponent,
    Fielderror3TestComponent,
    Fielderror3TestComponent,
    Form3ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    EuiFormsModule,
    TextfieldModule,
    SpinnerModule,
    ModalModule,
    MessageModule,
    BrowserAnimationsModule,
    DropdownModule,
    RadioButtonGroupModule,
    ButtonGroupModule,
    TextareaModule,
    CheckboxModule,
    AutoCompleteModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
