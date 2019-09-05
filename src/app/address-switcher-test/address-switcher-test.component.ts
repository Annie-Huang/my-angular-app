import { Component, OnInit } from '@angular/core';
import { AddressOption } from '@ea/ea-ui';

@Component({
  selector: 'app-address-switcher-test',
  templateUrl: './address-switcher-test.component.html',
  styleUrls: ['./address-switcher-test.component.scss']
})
export class AddressSwitcherTestComponent implements OnInit {
  addresses: AddressOption[] = [];
  selectedAddress: AddressOption;

  constructor() {}

  ngOnInit() {
    this.addresses = [
      {
        id: '1',
        value: '101 Mangana St, Rosebud VIC 3939'
      },
      {
        id: '2',
        value: '1001 Example ST, Brisbane QLD 3000'
      },
      {
        id: '3',
        value: 'Unit 1/1, 1 Collins ST, Melbourne city, Melboure Vic 3000'
      },
      {
        id: '4',
        value: '12345 Highway RD, Sydney NSW 3000'
      }
    ];
  }
}
