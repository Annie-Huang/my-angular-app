import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-textarea-test',
  templateUrl: './textarea-test.component.html',
  styleUrls: ['./textarea-test.component.scss']
})
export class TextareaTestComponent implements OnInit {

  form: FormGroup;
  defaultValue = 'EA component library\nis awesome!';
  success = '';

  get introduction(): AbstractControl {
    return this.form.get('introduction');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  onChange($event) {
  }

  createForm() {
    this.form = this.fb.group({
      introduction: [null, [Validators.required]],
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
