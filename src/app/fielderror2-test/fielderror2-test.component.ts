import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, NgForm, NgModel} from '@angular/forms';
import {EuiFormDirective} from '@ea/ea-ui';

@Component({
  selector: 'app-fielderror2-test',
  templateUrl: './fielderror2-test.component.html',
  styleUrls: ['./fielderror2-test.component.scss']
})
export class Fielderror2TestComponent implements OnInit, AfterViewInit {
  readonly successMessage = 'Yay! This form as been submitted!';
  @ViewChildren(EuiFormDirective) euiFormDirectives: QueryList<EuiFormDirective>;

  form2AccountNumber: NgModel;
  form2Postcode: NgModel;
  form2EuiFormDirective: EuiFormDirective;
  form2Success = '';
  form2Values: object;
  form2Status: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.euiFormDirectives.forEach((item, index) => {
      if (index === 0) {
        this.form2EuiFormDirective = item;
      }
    });
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

}
