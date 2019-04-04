import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EuiFormDirective} from '@ea/ea-ui';

@Component({
  selector: 'app-fielderror4-test',
  templateUrl: './fielderror4-test.component.html',
  styleUrls: ['./fielderror4-test.component.scss']
})
export class Fielderror4TestComponent implements OnInit, AfterViewInit {
  readonly successMessage = 'Yay! This form as been submitted!';
  @ViewChildren(EuiFormDirective) euiFormDirectives: QueryList<EuiFormDirective>;

  form4: FormGroup;
  form4EuiFormDirective: EuiFormDirective;
  form4Success = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForms();
  }

  ngAfterViewInit() {
    this.euiFormDirectives.forEach((item, index) => {
      if (index === 1) {
        this.form4EuiFormDirective = item;
      }
    });
  }

  createForms() {
    this.form4 = this.fb.group({
      form4AccountName: [null, [Validators.required]],
      form4Postcode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
    });
  }

  onForm4Submit(): void {
    if (this.form4.valid) {
      this.form4Success = this.successMessage;
    } else {
      this.form4Success = '';
    }
  }

  onForm4Reset() {
    this.form4.reset();
    this.form4EuiFormDirective.onReset();
  }
}
