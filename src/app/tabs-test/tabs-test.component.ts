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
  selector: 'app-tabs-test',
  templateUrl: './tabs-test.component.html',
  styleUrls: ['./tabs-test.component.scss']
})
export class TabsTestComponent implements OnInit {

  // constructor() { }
  //
  // ngOnInit() {
  // }

  twoOptions: Array<FieldOption<FuelType>> = [];
  threeOptions: Array<FieldOption<FuelType>> = [];
  form: FormGroup;
  success = '';

  get fuelType(): AbstractControl {
    return this.form.get('fuelType');
  }

  constructor(private readonly fb: FormBuilder) {
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
  }

  ngOnInit() {
    this.createForm();
  }

  onChange($event) {
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
