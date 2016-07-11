'use strict';

function Article() {
  this.articles = [];
  this.fetch = new Fetch();
}

Article.prototype = {

  storeArticles: function() {
    var self = this;
    var jason = new writeJSON();
    var dateRaw = new Date();
    var dates = dateRaw.getFullYear() + "-" + (dateRaw.getMonth()+1) + "-" + dateRaw.getDate();

    return this.fetch.getData(dates).then(function(response){
      self.articles = jason.parse(response);
    }, function(error) {
      console.error("failed", error);
    }).then(function (response) {
      self.generateSummary();
    }, function (error) {
      console.error('failed', error);
    });
  },
  
  generateSummary: function() {
    var self = this;
    self.articles.forEach( function(entry) {
      self.fetch.getSummary(entry.url).then(
        function(response){ entry.summary = JSON.parse(response).sentences; },
        function(error) { console.error("failed", error); });
      });

    },

    getArticles: function(data) {
      return this.articles;
    }

};
