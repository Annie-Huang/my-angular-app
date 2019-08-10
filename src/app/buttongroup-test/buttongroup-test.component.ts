import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldOption} from '@ea/ea-ui';

enum FuelType {
  ELE = 'ELE',
  GAS = 'GAS',
  BOTH = 'BOTH',
}

enum FuelTypeDescriptive {
  ELE = 'Electricity',
  GAS = 'Gas',
  BOTH = 'Electricity and Gas',
}

@Component({
  selector: 'app-buttongroup-test',
  templateUrl: './buttongroup-test.component.html',
  styleUrls: ['./buttongroup-test.component.scss']
})
export class ButtongroupTestComponent implements OnInit {
  twoOptions: Array<FieldOption<FuelType>> = [];
  threeOptions: Array<FieldOption<FuelType>> = [];
  fourOptions: Array<FieldOption<string>> = [];
  form: FormGroup;
  success = '';

  get fuelType(): AbstractControl {
    return this.form.get('fuelType');
  }

  constructor(private fb: FormBuilder) {
    this.twoOptions = [
      new FieldOption({
        value: FuelType.ELE,
        text: `${FuelTypeDescriptive.ELE} only`
      }),
      new FieldOption({
        value: FuelType.GAS,
        text: `${FuelTypeDescriptive.GAS} only`
      }),
    ];

    this.threeOptions = [
      new FieldOption({
        value: FuelType.BOTH,
        text: FuelTypeDescriptive.BOTH
      }),
      new FieldOption({
        value: FuelType.ELE,
        text: `${FuelTypeDescriptive.ELE} only`
      }),
      new FieldOption({
        value: FuelType.GAS,
        text: `${FuelTypeDescriptive.GAS} only`
      }),
    ];

    this.fourOptions = [
      new FieldOption({
        value: 'Monthly',
        text: 'M'
      }),
      new FieldOption({
        value: 'Quarter',
        text: 'Q'
      }),
      new FieldOption({
        value: 'Annually',
        text: 'Y'
      }),
      new FieldOption({
        value: 'Bill',
        text: 'Bill'
      }),
    ];
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      fuelType: [null, [Validators.required]]
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
