'use strict';

function writeJSON() {

};

writeJSON.prototype = {

  parse: function(data) {
    //write the data / summary into json for other layer
    return JSON.parse(data)
               .response
               .results
               .reduce(function(articles_array, article) {
                 var filtered_article = {}
                 filtered_article.title = article.webTitle
                 filtered_article.url = article.webUrl
                 articles_array.push(filtered_article)
                 return articles_array
               },[])
  },

  writeRAW: function(data) {
    return JSON.parse(data);
  }

};
