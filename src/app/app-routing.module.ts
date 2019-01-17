import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TypographyTestComponent} from './typography-test/typography-test.component';

const routes: Routes = [
  { path: 'typographic', component: TypographyTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
