import {Selector} from 'testcafe';

const introduction = Selector('#introduction-field');
const submitButton = Selector('button').withText('Submit');
const typedIntroduction = 'my introduction';
const errors = Selector('eui-field-errors');

fixture('Textarea')
  .page('http://localhost:4200/#/textarea');

test('Form submission with enter textarea info', async t => {
  await t
    .typeText('#introduction-field', typedIntroduction)
    .expect(introduction.value).eql(typedIntroduction)
    .click(submitButton)
    .expect(Selector('p').withText('"introduction": "' + typedIntroduction + '"').exists).ok()
    .expect(errors.exists).notOk();
});

test('Form submission without enter textarea info', async t => {
  await t
    .click(submitButton)
    .expect(errors.find('div').withText('Please add introduction').exists).ok();
});
