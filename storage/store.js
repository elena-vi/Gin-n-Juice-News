
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

  var createElement = function(bind_to_element_with_id, element_tag, text) {
    var element = document.createElement(element_tag)
    if (text != undefined) {
      var content = document.createTextNode(text)
      element.appendChild(content)
    }
    document.getElementById(bind_to_element_with_id).appendChild(element)
  }

  var createList = function(element_id,array) {
    var ul = document.createElement('ul')
    for(var i = 0; i < array.length; i++) {
    	var li = document.createElement('li')
    	var content = document.createTextNode(array[i])
      li.appendChild(content)
      ul.appendChild(li)
    }
    document.getElementById(element_id).appendChild(ul)
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
createElement('placeholder', 'div', 'TEST')
createElement('placeholder-2', 'h2')
});
