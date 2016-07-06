// route (path, template, contoller)
route('/', 'home', function(params) {
  console.log(params)
});

route('/fullArticle', 'fullArticle', function(params) {
  this.title = params
  console.log(params)
});

route('/summaryArticle', 'summaryArticle', function (params) {
  console.log(params)
});
