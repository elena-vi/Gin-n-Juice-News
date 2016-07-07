'use strict';

function Article() {

  this.articles = [];

};

Article.prototype = {

  storeArticles: function() {
    var self = this;
    var fetch = new Fetch();
    var jason = new writeJSON();
    var dateRaw = Date.now()
    var dates = "#{ dateRaw.getFullYear() }-#{ dateRaw.getMonth() }-#{ dateRaw.getDay() }"

    fetch.getData(dates)
         .then(function(response){ self.articles = jason.parse(response) },
         function(error) { console.error("failed", error) })

  },

  generateSummary: function() {
    var fetch = new Fetch();

    this.articles.forEach( function(entry) {
      fetch.getSummary(entry.url).then(
        function(response){ entry.summary = JSON.parse(response).text },
        function(error) { console.error("failed", error) });
    })

  },

  getArticles: function(data) {

  }

};
