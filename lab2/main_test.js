const test = require('node:test');
const assert = require('assert');
const { Application, MailSystem } = require('./main');

test('Application selects and notifies a person', () => {
  // Create a stub for MailSystem class
  const mailSystemStub = {
    write: () => 'Mocked context',
    send: () => true,
  };

  // Create an instance of Application using the stub
  const app = new Application();
  app.mailSystem = mailSystemStub;

  // Test selectNextPerson() method
  assert.strictEqual(app.selectNextPerson(), 'John Doe'); // Assuming 'John Doe' is selected

  // Test notifySelected() method
  app.notifySelected();
  // Assert that write and send methods of mailSystemStub were called
  assert.strictEqual(mailSystemStub.write.calledWith('John Doe'), true);
  assert.strictEqual(mailSystemStub.send.calledWith('John Doe', 'Mocked context'), true);
});
