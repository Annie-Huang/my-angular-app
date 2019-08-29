import { Component } from '@angular/core';
import {FAB_SIZE, FAB_THEME} from '@ea/ea-ui';

@Component({
  selector: 'app-fab-test',
  templateUrl: './fab-test.component.html',
  styleUrls: ['./fab-test.component.scss']
})
export class FabTestComponent {

  counter = 0;
  tCounter = 0;

  dummyWidth = 'medium';

  readonly ALL_STYLES: string[] = Object.values(FAB_THEME);
  readonly ALL_STYLES_STR: string = this.ALL_STYLES.map(v => `'${v}'`).join(', ');

  readonly ALL_SIZES: string[] = Object.values(FAB_SIZE);
  readonly ALL_SIZES_STR: string = this.ALL_SIZES.map(v => `'${v}'`).join(', ');

  extended = true;
  buttonTextOptions = ['Click Me!', 'Nothing Happened!', 'Wow!', 'Shazam!', 'So cool!', 'Incredible!'];
  buttonSelection = 0;

  constructor() {}

  demoCounterClick() {
    this.counter += 1;
  }
  demoTCounterClick() {
    this.tCounter += 1;
  }

  extendedFabToggle() {
    this.extended = !this.extended;
  }

  mockWidthChange(ev: string) {
    const nextWidth = ev.toLowerCase().trim();
    if (nextWidth.length <= 0) {
      this.dummyWidth = FAB_SIZE.MEDIUM;
    } else {
      this.dummyWidth = nextWidth;
    }
  }

  clickSasButton() {
    this.buttonSelection = (this.buttonSelection + 1) % this.buttonTextOptions.length;
  }

}
