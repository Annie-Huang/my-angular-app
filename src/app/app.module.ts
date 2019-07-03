import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { EuiFormsModule, TextfieldModule, SpinnerModule, ModalModule, MessageModule, MessageService,
  DropdownModule, RadioButtonGroupModule, ButtonGroupModule, TextareaModule, CheckboxModule, AutoCompleteModule,
  AccordionModule, TooltipModule, TabsModule, ProgressIndicatorModule} from '@ea/ea-ui';

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
import { Fielderror4TestComponent } from './fielderror4-test/fielderror4-test.component';
import { Form4ChildComponent } from './fielderror4-test/form4-child.component';
import { AccordionTestComponent } from './accordion-test/accordion-test.component';
import { TooltipTestComponent } from './tooltip-test/tooltip-test.component';
import { TabsTestComponent } from './tabs-test/tabs-test.component';
import { ProgressIndicatorTestComponent } from './progress-indicator-test/progress-indicator-test.component';

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
    Form3ChildComponent,
    Fielderror4TestComponent,
    Form4ChildComponent,
    AccordionTestComponent,
    TooltipTestComponent,
    TabsTestComponent,
    ProgressIndicatorTestComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
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
    AutoCompleteModule,
    AccordionModule,
    TooltipModule,
    TabsModule,
    ProgressIndicatorModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
