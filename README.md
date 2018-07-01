# http2-chunked-poc
POC to send chunked data in http2 protocol

run app using- 
node --expose-http2 server.js


References:
generate certificate and key for http2 server

openssl genrsa -des3 -passout pass:x -out server.pass.key 2048

openssl rsa -passin pass:x -in server.pass.key -out server.key

openssl req -new -key server.key -out server.csr

openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt



https://medium.com/@imjacobclark/http-2-with-node-js-85da17322812
https://medium.com/the-node-js-collection/say-hello-to-http-2-for-node-js-core-261ba493846e
