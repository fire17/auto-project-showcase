const http = require('http');
const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/webhook', secret: 'my-secret' });

http.createServer((req, res) => {
  handler(req, res, () => {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7777, () => {
  console.log('Listening on 7777');
});

handler.on('push', () => {
  console.log('Received a push event');
  // Run the update-repo-list script
  require('child_process').spawn('npm', ['run', 'update-repo-list'], { stdio: 'inherit' });
});
