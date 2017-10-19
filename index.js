var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, './dist')));

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
    console.log(__dirname);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// // server.js
// const express = require('express');
// const app = express();
// // If an incoming request uses
// // a protocol other than HTTPS,
// // redirect that request to the
// // same url but with HTTPS
// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }
// // Instruct the app
// // to use the forceSSL
// // middleware
// app.use(forceSSL());
// // ...
