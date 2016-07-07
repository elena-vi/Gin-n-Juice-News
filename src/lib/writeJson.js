'use strict';

function writeJSON() {
  this.receivedData = {};
};

writeJSON.prototype = {

  write: function(data) {
    //write the data / summary into json for other layer

  },

  writeRAW: function(data) {
    console.log("5");
    this.receivedData =  JSON.parse(data);
    console.log("6");
  }

};
