// route (path, template, contoller)
route('/', 'home', function() {
	console.log("why not zoidberg?!");
});

route('/page1', 'something', function() {
	console.log("something else?!");
});

route('/page2', 'other', function () {
	console.log("OMFG IT WORKS");
});
