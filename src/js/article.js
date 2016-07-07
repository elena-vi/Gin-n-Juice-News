'use strict';

function Article() {

  this.articles = [];

};

Article.prototype = {

  storeArticles: function() {
    var self = this;
    var fetch = new Fetch();
    var jason = new writeJSON();

  fetch.getData("2016-07-06")
      .then(function(response){ self.articles = jason.parse(response) },
            function(error) { console.error("failed", error) })

  },

  getArticles: function(data) {

  }

};
