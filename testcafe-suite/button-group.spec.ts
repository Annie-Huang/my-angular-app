import { Selector } from 'testcafe';
const firstButtonGroupOption = Selector('form').find('label').withText('Electricity and Gas');
const submitButton = Selector('button').withText('Submit');

fixture('Getting Started')
  .page('http://localhost:4200/#/buttongroup');

test('Submit with choose a dropdown option', async t => {
  await t
    .click(firstButtonGroupOption)
    .click(submitButton)
    .expect(Selector('p').withText('"fuelType": "BOTH"').exists).ok()
    .expect(Selector('eui-field-errors').exists).notOk()
  ;
});

test('Submit without choose a button in button group', async t => {
  await t
    .click(submitButton)
    .expect(Selector('eui-field-errors').find('div').withText('Please choose your fuel type').exists).ok()
  ;
});
