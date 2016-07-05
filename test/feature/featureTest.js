var Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('ToDo List', function() {

  const browser = new Browser();

  before(function() {
    return browser.visit('/');
  })

  describe('page loads successfully', function() {

    it('should be successful', function() {
      browser.assert.success();
    });

    it('shows some text', function() {
      browser.assert.text('title', 'To Do List')
    });

  });

  describe('adds a Task', function() {

    it('submit task text', function() {
      browser.fill('task', 'This is my test task');
      browser.pressButton('Add Task');
      browser.assert.text('li', 'This is my test task');
    });

    

  });

});
