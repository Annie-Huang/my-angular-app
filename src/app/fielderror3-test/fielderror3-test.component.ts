import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EuiFormDirective} from '@ea/ea-ui';

@Component({
  selector: 'app-fielderror3-test',
  templateUrl: './fielderror3-test.component.html',
  styleUrls: ['./fielderror3-test.component.scss']
})
export class Fielderror3TestComponent implements OnInit {
  readonly successMessage = 'Yay! This form as been submitted!';
  @ViewChildren(EuiFormDirective) euiFormDirectives: QueryList<EuiFormDirective>;

  form3: FormGroup;
  form3ErrorVisible = false;
  form3Success = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.form3 = this.fb.group({
      form3AccountName: [null, [Validators.required]],
      form3Postcode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
    });
  }

  onForm3Submit(): void {
    this.form3ErrorVisible = true;

    if (this.form3.valid) {
      this.form3Success = this.successMessage;
    } else {
      this.form3Success = '';
    }
  }

  onForm3Reset() {
    this.form3.reset();
    this.form3ErrorVisible = false;
  }

}
