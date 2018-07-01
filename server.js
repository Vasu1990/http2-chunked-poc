const http2 = require("http2"),
fs = require('fs');

const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.crt')
};

const server = http2.createSecureServer(options);
server.on('stream', (stream,) => {
  stream.respond({
  "Content-Type": "text/html; charset=UTF-8"
});
  stream.write("hello");
  setTimeout(() => {
    stream.write('more content');
    stream.end();
},2000);
});
server.listen(3000);