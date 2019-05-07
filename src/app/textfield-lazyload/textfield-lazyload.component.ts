import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-textfield-lazyload',
  templateUrl: './textfield-lazyload.component.html',
  styleUrls: ['./textfield-lazyload.component.scss']
})
export class TextfieldLazyloadComponent implements OnInit {

  form: FormGroup;
  success = '';

  get accountName(): AbstractControl {
    return this.form.get('accountName');
  }

  get accountExpiry(): AbstractControl {
    return this.form.get('accountExpiry');
  }

  get postcode(): AbstractControl {
    return this.form.get('postcode');
  }

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  onChange(value) {
    console.log('new value', value);
  }

  createForm() {
    this.form = this.fb.group({
      accountName: [null, [Validators.required]],
      postcode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      accountExpiry: [null, [Validators.required, Validators.pattern(/^(((0)[0-9])|((1)[0-2]))( \/ )\d{2}$/)]]
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
