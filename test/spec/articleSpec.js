describe('Article', function() {

	beforeEach(function() {
		testArticles = new Article();
		Obj = jasmine.objectContaining;
	});

	it('Initialised with an arry of articles', function() {
		expect(testArticles.articles).toEqual([]);
	});

	it('Initialised with a fetch object', function() {
		expect(testArticles.fetch).toEqual(Obj({}));
	});
	it('storeArticles returns a promise', function () {
		expect(testArticles.storeArticles()).toEqual(Obj({}))
	});
	it('Articles can be stored', function () {
		testArticles.storeArticles();
			expect(testArticles.articles.length).toEqual(10);
	});
});

// Article.prototype = {
	//   storeArticles: function() {
		//     var self = this;
		//     var jason = new writeJSON();
		//     var dateRaw = Date.now();
		//     var dates = "#{ dateRaw.getFullYear() }-#{ dateRaw.getMonth() }-#{ dateRaw.getDay() }";
		//     return this.fetch.getData(dates).then(function(response){
			//       self.articles = jason.parse(response);
		//     }, function(error) {
			//       console.error("failed", error);
		//     }).then(function (response) {
			//       self.generateSummary();
		//     }, function (error) {
			//       console.error('failed', error);
		//     });
	//   },
	//   generateSummary: function() {
		//     var self = this;
		//     self.articles.forEach( function(entry) {
			//       self.fetch.getSummary(entry.url).then(
				//         function(response){ entry.summary = JSON.parse(response).sentences; },
				//         function(error) { console.error("failed", error); });
			//       });
		//     },
		//     getArticles: function(data) {
			//       return this.articles;
		//     }
	// };
