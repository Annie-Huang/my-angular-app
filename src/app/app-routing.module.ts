import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TextfieldTestComponent } from './textfield-test/textfield-test.component';
import { TypographyTestComponent } from './typography-test/typography-test.component';
import {ModalComponent} from './modal/modal.component';
import {DropdownTestComponent} from './dropdown-test/dropdown-test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'textfield', component: TextfieldTestComponent },
  { path: 'dropdown', component: DropdownTestComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'typographic', component: TypographyTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
