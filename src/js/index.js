document.addEventListener("DOMContentLoaded", function(event){
  var todolist = new toDoList()
  document.getElementById("todo-submit").addEventListener("click", function(event) {
    var task = document.getElementById("todo-task").value;
    todolist.addTask(task);
    removeChildElements("to-do-list")
    createTodoList('to-do-list', todolist.getList())
  })

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
  
  var removeChildElements = function(element_id){
    var node = document.getElementById(element_id)
    while (node.lastChild){
      node.removeChild(node.lastChild);
    }
  }
  createTodoList('to-do-list', todolist.getList())
});
