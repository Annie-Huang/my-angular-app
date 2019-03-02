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
  const postcode = Selector('#postcode-field');

  await t
    .typeText(name, typedName)
    .expect(name.value).eql(typedName)
    .typeText(postcode, typedPostcode)
    .expect(postcode.value).eql(typedPostcode);
});


test('Submit without name and postcode', async t => {
  const typedName = 'my account name';
  const typedPostcode = '3000';

  const name = Selector('#account-name-field');
  const postcode = Selector('#postcode-field');
  const submitButton = Selector('button').withText('Submit');
  // const msg = Selector('p').withText('Yay! This form as been submitted!');
  // const msgExists = Selector('p').withText('Yay! This form as been submitted!').exists;

  await t
    .typeText(name, typedName)
    .expect(name.value).eql(typedName)
    .typeText(postcode, typedPostcode)
    .expect(postcode.value).eql(typedPostcode)
    .click(submitButton)
    .expect(Selector('p').withText('Yay! This form as been submitted!').exists).ok()
    .expect(Selector('eui-field-errors').exists).notOk()
    // .expect(msg.visible);
    // .expect( Selector('form').find('p').nth(3)).eql('Yay! This form as been submitted!', 'check element text', { timeout: 500 })
    // .expect(Selector('p').innerText).eql('text', 'check element text', { timeout: 500 });
  ;
});

test('Submit without name and postcode', async t => {
  const typedName = 'my account name';
  const typedPostcode = '3000';

  const name = Selector('#account-name-field');
  const postcode = Selector('#postcode-field');
  const submitButton = Selector('button').withText('Submit');
  // const msg = Selector('p').withText('Yay! This form as been submitted!');
  // const msgExists = Selector('p').withText('Yay! This form as been submitted!').exists;

  await t
    .click(submitButton)
    .expect(Selector('eui-field-errors').find('div').withText('Please enter a name').exists).ok()
    .expect(Selector('eui-field-errors').find('div').withText('Please enter a postcode').exists).ok()
    // .expect(Selector('p').withText('Yay! This form as been submitted!').exists).ok()
  // .expect(msg.visible);
  // .expect( Selector('form').find('p').nth(3)).eql('Yay! This form as been submitted!', 'check element text', { timeout: 500 })
  // .expect(Selector('p').innerText).eql('text', 'check element text', { timeout: 500 });
  ;
});
