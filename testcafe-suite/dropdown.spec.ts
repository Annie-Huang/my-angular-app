import {Selector} from 'testcafe';

const dropdownBox = Selector('form').find('label').withText('Please select a value');
const firstDropDownOption = Selector('form').find('li').withText('Option 1');
const submitButton = Selector('button').withText('Submit');
const errors = Selector('eui-field-errors');

fixture('Dropdown')
  .page('http://localhost:4200/#/dropdown');

test('Form submission with choose a dropdown option', async t => {
  await t
    .click(dropdownBox)
    .click(firstDropDownOption)
    .click(submitButton)
    .expect(Selector('p').withText('"myOption": "option_1"').exists).ok()
  // .expect(errors.exists).notOk()
  ;
});

test('Form submission without choose a dropdown option', async t => {
  await t
    .click(submitButton)
    .expect(errors.find('div').withText('Please choose an option').exists).ok();
});

