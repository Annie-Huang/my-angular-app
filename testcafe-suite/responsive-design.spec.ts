import {Selector} from 'testcafe';

const menuButton = Selector('.menu-button');
const testText = Selector('.test-responsible-design');

fixture('Responsive design')
  .page('http://localhost:4200/#/responsive-design');

test('Verify background-color for different screen width', async t => {
  // menuButton has display = 'block' for screen max-width = 767px and 'none' screen width > 767px
  // visible:	Boolean. true if the element is visible, i.e. does not have display: none or visibility: hidden CSS properties
  //                   and has non-zero width and height.
  if (await menuButton.visible) {
    await t
      .expect(testText.getStyleProperty('background-color')).eql('rgb(221, 160, 221)'); // plum, mobile color
  } else {
    await t
      .expect(testText.getStyleProperty('background-color')).eql('rgb(127, 255, 212)');  // aquamarine, desktop color
  }
});
