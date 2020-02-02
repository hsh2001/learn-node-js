const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer((request, response) => {
    let requestURL = request.url;
    const { id = 'index' } = url.parse(requestURL, true).query || {};

    if (requestURL == '/favicon.ico') {
      response.writeHead(404);
      response.end();
      return;
    }

    console.log(`/public/${id}.html`);
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + `/public/${id}.html`));
});

app.listen(3000);
