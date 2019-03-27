import { Component, OnInit } from '@angular/core';
import {FieldOption} from '@ea/ea-ui';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-autocomplete-test',
  templateUrl: './autocomplete-test.component.html',
  styleUrls: ['./autocomplete-test.component.scss']
})
export class AutocompleteTestComponent implements OnInit {
  defaultValues: Array<FieldOption<string>>;
  filteredValues$ = new Subject<Array<FieldOption<string>>>();

  ngOnInit() {
    this.defaultValues = [
      new FieldOption({
        value: '3000',
        text: 'Melbourne'
      }),
      new FieldOption({
        value: '2000',
        text: 'Sydney'
      }),
      new FieldOption({
        value: '2600',
        text: 'Canberra'
      }),
      new FieldOption({
        value: '4000',
        text: 'Brisbane'
      }),
      new FieldOption({
        value: '5000',
        text: 'Adelaide'
      })
    ];
  }

  filterValues(searchText: string) {
    searchText = searchText.toLowerCase();
    const results = this.defaultValues.filter(val => val.text.toLowerCase().includes(searchText));
    this.filteredValues$.next(results);
  }
}
