import { Selector } from 'testcafe';
const firstRadioButton = Selector('form').find('label').withText('Yes');
const submitButton = Selector('button').withText('Submit');

fixture('Getting Started')
  .page('http://localhost:4200/#/radiobuttongroup');

test('Submit with choose a radio button', async t => {
  await t
    .click(firstRadioButton)
    .click(submitButton)
    .expect(Selector('p').withText('"deviceInstalled": "yes"').exists).ok()
    .expect(Selector('eui-field-errors').exists).notOk()
  ;
});

test('Submit without enter textarea info', async t => {
  await t
    .click(submitButton)
    .expect(Selector('eui-field-errors').find('div').withText('Please choose a value').exists).ok()
  ;
});
