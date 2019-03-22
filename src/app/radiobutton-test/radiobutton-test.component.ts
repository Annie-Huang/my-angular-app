import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldOption} from '@ea/ea-ui';

@Component({
  selector: 'app-radiobutton-test',
  templateUrl: './radiobutton-test.component.html',
  styleUrls: ['./radiobutton-test.component.scss']
})
export class RadiobuttonTestComponent implements OnInit {

  twoOptions: Array<FieldOption<String>> = [];
  twoOptionsBlurb: Array<FieldOption<String>> = [];
  form: FormGroup;
  success = '';

  get deviceInstalled(): AbstractControl {
    return this.form.get('deviceInstalled');
  }

  constructor(private fb: FormBuilder) {
    this.twoOptions = [
      new FieldOption({
        value: 'yes',
        text: 'Yes'
      }),
      new FieldOption({
        value: 'no',
        text: 'No'
      }),
    ];
    this.twoOptionsBlurb = [
      new FieldOption({
        value: 'yes',
        text: 'Yes',
        blurb: 'This is a yes blurb'}
      ),
      new FieldOption({
        value: 'no',
        text: 'No',
        blurb: 'This is a no blurb'
      }),
    ];
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      deviceInstalled: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.success = 'Yay! This form as been submitted!';
    } else {
      this.success = '';
    }

  }

}
