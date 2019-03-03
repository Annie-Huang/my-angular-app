import { Selector } from 'testcafe';
const testText = Selector('.test-responsible-design');

fixture('Getting Started')
  .page('http://localhost:4200/#/responsive-design');

test('Submit with choose a dropdown option', async t => {
  await t
    // .expect(testText.getStyleProperty('background-color')).eql('rgb(127, 255, 212)')  // aquamarine
    .expect(testText.getStyleProperty('background-color')).eql('rgb(221, 160, 221)') // plum
  ;
});
