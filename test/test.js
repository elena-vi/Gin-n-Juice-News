import { expect } from 'chai';
var toDoList = require('../src/js/toDoList');

describe('check test', () => {

  it('5 + 5 = 10', () => {
    expect(5 + 5).to.equal(10)
  });
})

describe('toDoList', () => {

  describe('getList', () => {

    it('returns an empty list on initialise', () => {
      var todolist = new toDoList();
      expect(todolist.getList()).to.be.empty;
    });

  });

  describe('addList', () => {

    it('adds to the list', () => {
      var todolist = new toDoList();
      todolist.addList('Hello');
      expect(todolist.getList()).to.contain({task: "Hello", done: false});
    })
  });

  describe('markTask', () => {

    it('marks an item as complete', () => {
      var todolist = new toDoList();
      todolist.addList('Hello');
      todolist.markTask(0);
      expect(todolist.getList()).to.contain({task: "Hello", done: true});
    });

  });

});
