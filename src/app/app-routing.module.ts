import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TextfieldTestComponent } from './textfield-test/textfield-test.component';
import { TypographyTestComponent } from './typography-test/typography-test.component';
import {ModalComponent} from './modal/modal.component';
import {DropdownTestComponent} from './dropdown-test/dropdown-test.component';
import {RadiobuttonTestComponent} from './radiobutton-test/radiobutton-test.component';
import {TextareaTestComponent} from './textarea-test/textarea-test.component';
import {ButtongroupTestComponent} from './buttongroup-test/buttongroup-test.component';
import {CheckboxTestComponent} from './checkbox-test/checkbox-test.component';
import {AutocompleteTestComponent} from './autocomplete-test/autocomplete-test.component';
import {Fielderror1TestComponent} from './fielderror1-test/fielderror1-test.component';
import {Fielderror2TestComponent} from './fielderror2-test/fielderror2-test.component';
import {Fielderror3TestComponent} from './fielderror3-test/fielderror3-test.component';
import {Fielderror4TestComponent} from './fielderror4-test/fielderror4-test.component';
import {AccordionTestComponent} from './accordion-test/accordion-test.component';
import {TooltipTestComponent} from './tooltip-test/tooltip-test.component';
import {TabsTestComponent} from './tabs-test/tabs-test.component';
import {ProgressIndicatorTestComponent} from './progress-indicator-test/progress-indicator-test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'textfield', component: TextfieldTestComponent },
  { path: 'textfield-lazyload', loadChildren: './textfield-lazyload/textfield-lazyload.module#TextfieldLazyloadModule'},
  { path: 'textarea', component: TextareaTestComponent },
  { path: 'dropdown', component: DropdownTestComponent },
  { path: 'radiobutton', component: RadiobuttonTestComponent },
  { path: 'buttongroup', component: ButtongroupTestComponent },
  { path: 'checkbox', component: CheckboxTestComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'autocomplete', component: AutocompleteTestComponent },
  { path: 'typographic', component: TypographyTestComponent },
  { path: 'fielderror1', component: Fielderror1TestComponent },
  { path: 'fielderror2', component: Fielderror2TestComponent },
  { path: 'fielderror3', component: Fielderror3TestComponent },
  { path: 'fielderror4', component: Fielderror4TestComponent },
  { path: 'accordion', component: AccordionTestComponent },
  { path: 'tooltip', component: TooltipTestComponent },
  { path: 'tabs', component: TabsTestComponent },
  { path: 'progress-indicator', component: ProgressIndicatorTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
