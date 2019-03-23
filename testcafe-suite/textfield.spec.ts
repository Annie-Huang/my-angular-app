import {Selector} from 'testcafe';

const nameField = '#account-name-field';
const name = Selector(nameField);
const postcodeField = '#postcode-field';
const postcode = Selector(postcodeField);
const submitButton = Selector('button').withText('Submit');
const typedName = 'my account name';
const typedPostcode = '3000';
const errors = Selector('eui-field-errors');

fixture('Textfield')
  .page('http://localhost:4200/#/textfield');

test('Verify header', async t => {
  const header = Selector('.feature-title');

  await t
    .expect(header.innerText).eql('Textfield');

});

test('Accepts input', async t => {
  await t
    .typeText(nameField, typedName)
    .expect(name.value).eql(typedName)
    .typeText(postcodeField, typedPostcode)
    .expect(postcode.value).eql(typedPostcode);
});


test('Form submission without name and postcode', async t => {
  await t
    .typeText(nameField, typedName)
    .expect(name.value).eql(typedName)
    .typeText(postcodeField, typedPostcode)
    .expect(postcode.value).eql(typedPostcode)
    .click(submitButton)
    .expect(Selector('p').withText('Yay! This form as been submitted!').exists).ok()
    .expect(errors.exists).notOk();
});

test('Form submission without name and postcode', async t => {
  await t
    .click(submitButton)
    .expect(errors.find('div').withText('Please enter a name').exists).ok()
    .expect(errors.find('div').withText('Please enter a postcode').exists).ok();
});
