import {Selector} from 'testcafe';

const firstRadioButton = Selector('form').find('label').withText('Yes');
const submitButton = Selector('button').withText('Submit');
const errors = Selector('eui-field-errors');

fixture('Radio button group')
  .page('http://localhost:4200/#/radiobuttongroup');

test('Form submission with choose a radio button', async t => {
  await t
    .click(firstRadioButton)
    .click(submitButton)
    .expect(Selector('p').withText('"deviceInstalled": "yes"').exists).ok()
    .expect(errors.exists).notOk();
});

test('Form submission without choose a radio button', async t => {
  await t
    .click(submitButton)
    .expect(errors.find('div').withText('Please choose a value').exists).ok();
});
