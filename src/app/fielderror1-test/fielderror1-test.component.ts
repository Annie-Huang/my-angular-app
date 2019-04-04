import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, NgForm, NgModel} from '@angular/forms';
import {EuiFormDirective} from '@ea/ea-ui';


@Component({
  selector: 'app-fielderror1-test',
  templateUrl: './fielderror1-test.component.html',
  styleUrls: ['./fielderror1-test.component.scss']
})
export class Fielderror1TestComponent implements OnInit {
  readonly successMessage = 'Yay! This form as been submitted!';
  @ViewChildren(EuiFormDirective) euiFormDirectives: QueryList<EuiFormDirective>;

  form1ErrorVisible = false;
  form1AccountNumber: NgModel;
  form1Postcode: NgModel;
  form1Success = '';
  form1Values: object;
  form1Status: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
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

}
