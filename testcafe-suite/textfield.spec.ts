import { Selector } from 'testcafe';

fixture('Getting Started')
  .page('http://localhost:4200/#/textfield');

test('Check header', async t => {
  const header = Selector('.feature-title');

  await t
    // .expect(header.value).eql('Textfield');
    .expect(header.innerText).eql('Textfield');

});

test('Accepts input', async t => {
  const typedName = 'my account name';
  const typedPostcode = '3000';

  const name = Selector('#account-name-field');

  await t
    .typeText(name, typedName)
    .expect(name.innerText).eql('my account name');

});
