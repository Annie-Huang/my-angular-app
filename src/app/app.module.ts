import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { InlineSVGModule } from 'ng-inline-svg';


import {
  EuiFormsModule,
  TextfieldModule,
  SpinnerModule,
  ModalModule,
  MessageModule,
  MessageService,
  DropdownModule,
  RadioButtonGroupModule,
  ButtonGroupModule,
  TextareaModule,
  CheckboxModule,
  AutoCompleteModule,
  AccordionModule,
  TooltipModule,
  TabsModule,
  ProgressIndicatorModule,
  FooterModule,
  CalendarModule,
  SliderModule,
  FabModule,
  BarChartModule,
  AddressSwitcherModule
} from '@ea/ea-ui';

import {TooltipModule as TooltipModulePrime} from 'primeng/tooltip';
import {MatTooltipModule} from '@angular/material/tooltip';

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
import { IconsSvgTestComponent } from './icons-svg-test/icons-svg-test.component';
import { FooterTestComponent } from './footer-test/footer-test.component';
import { MessageTestComponent } from './message-test/message-test.component';
import { CalendarTestComponent } from './calendar-test/calendar-test.component';
import { SliderTestComponent } from './slider-test/slider-test.component';
import { FabTestComponent } from './fab-test/fab-test.component';
import { BarChartTestComponent } from './bar-chart-test/bar-chart-test.component';
import { AddressSwitcherTestComponent } from './address-switcher-test/address-switcher-test.component';

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
    ProgressIndicatorTestComponent,
    IconsSvgTestComponent,
    FooterTestComponent,
    MessageTestComponent,
    CalendarTestComponent,
    SliderTestComponent,
    FabTestComponent,
    BarChartTestComponent,
    AddressSwitcherTestComponent
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
    ProgressIndicatorModule,
    TooltipModulePrime,
    MatTooltipModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    FooterModule,
    CalendarModule,
    SliderModule,
    FabModule,
    BarChartModule,
    AddressSwitcherModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
