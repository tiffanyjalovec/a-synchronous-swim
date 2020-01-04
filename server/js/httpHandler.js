const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  var directions = ['top', 'bottom', 'left', 'right'];
  var index = Math.floor(Math.random() *  (directions.length -1));
  console.log("index", index);

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, headers);
      res.end(directions[index]);
    }
  }

   res.writeHead(200, headers);
   res.end();
   next(); // invoke next() at the end of a request to help with testing!
};
