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


// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);
