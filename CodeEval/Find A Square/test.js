var fs = require('fs');
var os = require('os');
var http = require('http');

(function() {
  'use strict';
  fs.appendFile('input.txt', "\nTest", function(err) {
    console.log(err);
  });
}());
