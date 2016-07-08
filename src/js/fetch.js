'use strict';

function Fetch() {

  this.makersApiUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date="
  this.thumbnailUrl = "&show-fields=thumbnail,image&api-key=test"
  this.summaryApiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="

};

function HttpRequest(sourceURL){
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', sourceURL);
      xmlHttp.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if ( xmlHttp.status == 200) {
          // Resolve the promise with the response text
          resolve(xmlHttp.responseText);

        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error( xmlHttp.statusText));
        }
      };
      // Handle network errors
      xmlHttp.onerror = function() {
        reject(Error("Network Error"));
      };
      // Make the  xmlHttpuest
      xmlHttp.send(null);
    });
}

Fetch.prototype =  {

  getData:  function(date) {
    // Get me everything
    var sourceURL = this.makersApiUrl + date + this.thumbnailUrl;
    return new HttpRequest(sourceURL)
  },


  getSummary: function(dataURL) {
    //Get me the summary
    var sourceURL = this.summaryApiUrl + dataURL
    return new HttpRequest(sourceURL)
  }
};

