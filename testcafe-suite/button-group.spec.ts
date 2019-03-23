import {Selector} from 'testcafe';

const firstButtonGroupOption = Selector('form').find('label').withText('Electricity and Gas');
const submitButton = Selector('button').withText('Submit');
const errors = Selector('eui-field-errors');


fixture('Button group')
  .page('http://localhost:4200/#/buttongroup');

test('Form submission with choose choose a button in button group', async t => {
  await t
    .click(firstButtonGroupOption)
    .click(submitButton)
    .expect(Selector('p').withText('"fuelType": "BOTH"').exists).ok()
    .expect(errors.exists).notOk();
});

test('Form submission without choose a button in button group', async t => {
  await t
    .click(submitButton)
    .expect(errors.find('div').withText('Please choose your fuel type').exists).ok();
});
