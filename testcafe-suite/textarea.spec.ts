import { Selector } from 'testcafe';
const introduction = Selector('#introduction-field');
const submitButton = Selector('button').withText('Submit');
const typedIntroduction = 'my introduction';

fixture('Getting Started')
  .page('http://localhost:4200/#/textarea');

test('Submit with enter textarea info', async t => {
  await t
    .typeText(introduction, typedIntroduction)
    .expect(introduction.value).eql(typedIntroduction)
    // .expect(header.value).eql('Textfield');
    // .expect(header.innerText).eql('Textfield')
    .click(submitButton)
    .expect(Selector('p').withText('"introduction": "' + typedIntroduction + '"').exists).ok()
    .expect(Selector('eui-field-errors').exists).notOk()
  ;
});

test('Submit without enter textarea info', async t => {
  await t
    .click(submitButton)
    .expect(Selector('eui-field-errors').find('div').withText('Please add introduction').exists).ok()
  ;
});
