// route (path, template, contoller)

route('/', 'todolist', function() {
  console.log("why not zoidberg?!");
  toDoFuntionality();
});

route('/page1', 'something', function() {
  console.log("something else?!");
});

route('/page2', 'other', function () {
  console.log("OMFG IT WORKS");
});
