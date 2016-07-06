// route (path, template, contoller)
route('/', 'home', function() {
	console.log("why not zoidberg?!");
});

route('/fullArticle', 'fullArticle', function() {
	this.title = "Kitty makes mad stacks";
});

route('/summaryArticle', 'summaryArticle', function () {
	console.log("OMFG IT WORKS");
});

