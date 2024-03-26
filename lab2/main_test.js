const test = require('node:test');
const assert = require('assert');
const { Application, MailSystem } = require('./main');

test('Application selects and notifies a person', () => {
  // Create a stub for MailSystem class
  const mailSystemStub = {
    write: () => 'Mocked context',
    send: () => true,
  };

  const app = new Application();
  app.mailSystem = mailSystemStub;

  const selectedPerson = app.selectNextPerson();
  assert.strictEqual(selectedPerson !== null, true); // Assuming a person is selected

  app.notifySelected();

  assert.strictEqual(mailSystemStub.writeCalled, true);
  assert.strictEqual(mailSystemStub.sendCalled, true);
});
