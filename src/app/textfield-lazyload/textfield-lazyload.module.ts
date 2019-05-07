import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {TextfieldModule, EuiFormsModule} from '@ea/ea-ui';
import { TextfieldLazyloadRoutingModule } from './textfield-lazyload-routing.module';
import { TextfieldLazyloadComponent } from './textfield-lazyload.component';

@NgModule({
  declarations: [TextfieldLazyloadComponent],
  imports: [
    CommonModule,
    TextfieldLazyloadRoutingModule,
    TextfieldModule,
    EuiFormsModule,
    ReactiveFormsModule
  ]
})
export class TextfieldLazyloadModule { }
