// route (path, template, contoller)

var articles;

route('/', 'listArticle', function(params) {
	if (articles.articles.length != 10) {
		articles = new Article();
		articles.storeArticles().then(function (response) {
			console.log("got articles");
		});
	};
});

route('/summaryArticle', 'summaryArticle', function (params) {
	this.title = articles.articles[params].title;
	this.summary = articles.articles[params].summary.join(' ');
	this.url = articles.articles[params].url;
	this.img = articles.articles[params].img;
});
