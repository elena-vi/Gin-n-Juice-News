
document.addEventListener("DOMContentLoaded", function(event) {
    var todolist = new toDoList()
    todolist.addTask("Task one")
    todolist.addTask("Task two")
    todolist.addTask("Task three")
    todolist.addTask("Task four")
    todolist.addTask("Task five")
    todolist.markTask(2)
    todolist.markTask(4)
    console.log(todolist.getList())



  var createList = function(element_id,array) {
    var ul = document.createElement('ul');
    for(var i = 0; i < array.length; i++) {
    	var li = document.createElement('li')
    	var content = document.createTextNode(array[i]);
      li.appendChild(content);
      ul.appendChild(li);
    }
    document.getElementById(element_id).appendChild(ul);
  }

  var createTodoList = function(element_id,array) {
    var ul = document.createElement('ul');
    for(var i = 0; i < array.length; i++) {
    	var li = document.createElement('li')
    	var content = document.createTextNode(array[i].task)
      if (array[i].done === true) {
        var s = document.createElement('s')
        s.appendChild(content)
        li.appendChild(s)
      } else {
        li.appendChild(content)
      }
      ul.appendChild(li);
    }
    document.getElementById(element_id).appendChild(ul);
  }

createTodoList('to-do-list', todolist.getList())
});
