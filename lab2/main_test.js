const test = require('node:test');
const assert = require('assert');
const { Application, MailSystem } = require('./main');

const mailSystemMock = sinon.createStubInstance(MailSystem);

test('Application should select a random person', () => {
    const app = new Application();
    const person = app.getRandomPerson();
    assert(app.people.includes(person));
});

test('Application should select next person not already selected', () => {
    const app = new Application();
    const selectedCount = app.selected.length;
    app.selectNextPerson();
    assert.strictEqual(app.selected.length, selectedCount + 1);
});

test('Application should notify selected people by writing and sending mail', () => {
    const app = new Application();
    app.selected = ['Alice', 'Bob'];

    const writeStub = sinon.stub(mailSystemMock, 'write').returns('Mocked context');
    const sendStub = sinon.stub(mailSystemMock, 'send').returns(true);

    app.notifySelected();

    assert.strictEqual(writeStub.callCount, 2);
    assert.strictEqual(sendStub.callCount, 2);
});
