import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-textfield-test',
  templateUrl: './textfield-test.component.html',
  styleUrls: ['./textfield-test.component.scss']
})
export class TextfieldTestComponent implements OnInit {
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

  get asyncValidator(): AbstractControl {
    return this.form.get('asyncValidator');
  }

  constructor(private readonly fb: FormBuilder) {}

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
      asyncValidator: [null, [Validators.required], [this.validateAsync.bind(this)]],
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

  private validateAsync(control: FormControl): Observable<ValidationErrors> {
    return timer(500).pipe(
      filter(() => control.value),
      map(() => control.value),
      delay(2000),
      map(value => {
        const errors = {} as ValidationErrors;
        if (value !== 'secret') {
          errors['invalid-code'] = {};
        }
        return errors;
      })
    );
  }
}
