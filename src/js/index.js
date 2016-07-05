// Prevents page load and sets history to back

document.addEventListener("DOMContentLoaded", function(event) {
  var todolist = new toDoList()

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
    // todolist.addTask();
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

  createTodoList('to-do-list', todolist.getList())

});
