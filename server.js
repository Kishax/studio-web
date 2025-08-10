const http = require('http');

// App Runnerが指定するポート（8080）を環境変数から取得。
// ローカルで動かす場合は、代わりに3000番など任意のポートを使う。
const port = process.env.PORT || 3000;

// App Runnerのコンテナ内で外部からの通信を受け付けるため '0.0.0.0' を指定。
const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello App Runner!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
