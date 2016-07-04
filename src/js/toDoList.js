'use strict';

function ToDoList () {
  this.list = [];
};

ToDoList.prototype = {

  getList: function() {
    return this.list;
  },

  addList: function(string) {
    this.list.push( {task: string, done: false} );
  },

  markTask: function(indexOfTask) {
    this.list[indexOfTask].done = true;
  }



};

module.exports = ToDoList;
