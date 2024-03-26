const test = require('node:test');
const sinon = require('sinon');
const assert = require('assert');
const { Application, MailSystem } = require('./main');

test('Application selects and notifies a person', () => {
  // Create a stub for MailSystem class
  const mailSystemStub = {
    write: sinon.stub().returns('Mocked context'),
    send: sinon.stub().returns(true),
  };

  const app = new Application();
  app.mailSystem = mailSystemStub;

  const selectedPerson = app.selectNextPerson();
  assert(selectedPerson !== null); // Assuming a person is selected

  app.notifySelected();

  // Assert that write and send methods of mailSystemStub were called
  assert(mailSystemStub.write.calledOnceWith(selectedPerson)); // Check if write method was called with selected person
  assert(mailSystemStub.send.calledOnceWith(selectedPerson, 'Mocked context')); // Check if send method was called with correct arguments
});
