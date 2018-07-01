'use strict';
const spdy = require('spdy'),
    fs = require('fs');

    const options = {
        key: fs.readFileSync(__dirname + '/server.key'),
        cert: fs.readFileSync(__dirname + '/server.crt')
    };

    spdy.createServer(options, function(req, res) {
        // res.set({
        //     'Content-Type': 'text/html; charset=UTF-8', //This is done to overcome the issue of minimum number of bytes needed to render the DOM in firefox.
        // });
        res.writeHead(200);
        res.write('hellow world');
        setTimeout(() => {
            res.write('more content');
            res.end();
        },2000);
    }).listen(3000);