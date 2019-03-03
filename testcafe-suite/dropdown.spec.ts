import { Selector } from 'testcafe';
const dropdownBox = Selector('form').find('label').withText('Please select a value');
const firstDropDownOption = Selector('form').find('li').withText('Option 1');
const submitButton = Selector('button').withText('Submit');

fixture('Getting Started')
  .page('http://localhost:4200/#/dropdown');

test('Submit with choose a dropdown option', async t => {
  await t
    .click(dropdownBox)
    .click(firstDropDownOption)
    .click(submitButton)
    .expect(Selector('p').withText('"myOption": "option_1"').exists).ok()
    .expect(Selector('eui-field-errors').exists).notOk()
  ;
});

test('Submit without choose a dropdown option', async t => {
  await t
    .click(submitButton)
    .expect(Selector('eui-field-errors').find('div').withText('Please choose an option').exists).ok()
  ;
});

