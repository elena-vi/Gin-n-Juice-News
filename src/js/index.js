// route (path, template, contoller)
route('/', 'home', function (params) {
  this.snoopDogg = 'Rollin down the street, <br> smokin indo, sippin on gin and juice..'
});

route('/gin', 'ginTemplate', function (params) {
  this.title = "Gin";
});

route('/juice', 'juiceTemplate', function (params) {
  this.title = "Juice";
});
