import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextfieldLazyloadComponent} from './textfield-lazyload.component';

const routes: Routes = [
  {path: '', component: TextfieldLazyloadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextfieldLazyloadRoutingModule { }
