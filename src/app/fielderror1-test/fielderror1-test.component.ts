import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, NgModel, Validators} from '@angular/forms';
import {EuiFormDirective} from '@ea/ea-ui';


@Component({
  selector: 'app-fielderror1-test',
  templateUrl: './fielderror1-test.component.html',
  styleUrls: ['./fielderror1-test.component.scss']
})
export class Fielderror1TestComponent implements OnInit, AfterViewInit {
  readonly successMessage = 'Yay! This form as been submitted!';
  @ViewChildren(EuiFormDirective) euiFormDirectives: QueryList<EuiFormDirective>;

  form1ErrorVisible = false;
  form1AccountNumber: NgModel;
  form1Postcode: NgModel;
  form1Success = '';
  form1Values: object;
  form1Status: string;

  form2AccountNumber: NgModel;
  form2Postcode: NgModel;
  form2EuiFormDirective: EuiFormDirective;
  form2Success = '';
  form2Values: object;
  form2Status: string;

  form3: FormGroup;
  form3ErrorVisible = false;
  form3Success = '';

  form4: FormGroup;
  form4EuiFormDirective: EuiFormDirective;
  form4Success = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForms();
  }

  ngAfterViewInit() {
    this.euiFormDirectives.forEach((item, index) => {
      if (index === 0) {
        this.form2EuiFormDirective = item;
      } else if (index === 1) {
        this.form4EuiFormDirective = item;
      }
    });
  }

  onForm1Submit(form: NgForm) {
    this.form1ErrorVisible = true;
    this.form1Values = form.value;
    this.form1Status = form.status;

    if (form.valid) {
      this.form1Success = this.successMessage;
    } else {
      this.form1Success = '';
    }
  }

  onForm1Reset(form: NgForm) {
    form.reset();
    this.form1ErrorVisible = false;
  }

  onForm2Submit(form: NgForm): void {
    this.form2Values = form.value;
    this.form2Status = form.status;

    if (form.valid) {
      this.form2Success = this.successMessage;
    } else {
      this.form2Success = '';
    }
  }

  onForm2Reset(form: NgForm) {
    form.reset();
    this.form2EuiFormDirective.onReset();
  }

  createForms() {
    this.form3 = this.fb.group({
      form3AccountName: [null, [Validators.required]],
      form3Postcode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
    });

    this.form4 = this.fb.group({
      form4AccountName: [null, [Validators.required]],
      form4Postcode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
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
