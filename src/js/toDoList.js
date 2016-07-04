'use strict';

function toDoList () {
  this.list = [];
};

toDoList.prototype = {

  getList: function() {
    return this.list;
  },

  addTask: function(string) {
    this.list.push( {task: string, done: false} );
  },

  markTask: function(indexOfTask) {
    this.list[indexOfTask].done = true;
  }



};

// module.exports = ToDoList;
