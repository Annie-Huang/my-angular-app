import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldOption} from '@ea/ea-ui';
import {SelectItem} from 'primeng/api';

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
  form: FormGroup;
  success = '';


  types: SelectItem[];
  selectedType: string;
  selectedTypes: string[] = ['PayPal','MasterCard'];


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

    this.types = [
      {label: 'Electricity and Gas Electricity and Gas', value: 'Electricity and Gas'},
      {label: 'Electricity only Electricity only', value: 'Electricity only'},
      {label: 'Gas only Gas only', value: 'Gas only'}
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
