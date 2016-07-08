// route (path, template, contoller)

var articles;

route('/', 'listArticle', function(params) {
	articles = new Article();
	articles.storeArticles().then(function (response) {
		// do do do do do do nothing 
	});
});

route('/fullArticle', 'fullArticle', function(params) {
	this.title = params;
	console.log(params)
});

route('/summaryArticle', 'summaryArticle', function (params) {
	this.title = articles.articles[params].title;
	this.summary = articles.articles[params].summary.join(' ');
	this.url = articles.articles[params].url;
	// console.log(params)
});
