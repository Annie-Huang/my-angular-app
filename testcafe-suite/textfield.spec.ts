import { Selector } from 'testcafe';

fixture('Getting Started')
  .page('http://localhost:4200/#/textfield');

test('My first test', async t => {
  const header = Selector('.feature-title');

  await t
    // .expect(header.value).eql('Textfield');
    .expect(header.innerText).eql('Textfield');

});
