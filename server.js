// httpモジュールを読み込む
const http = require('http');

// サーバーのホスト名とポートを設定
const hostname = '127.0.0.1'; // ローカルホスト
const port = 3000;

// httpサーバーを作成
const server = http.createServer((req, res) => {
  // ステータスコード200（成功）を返す
  res.statusCode = 200;
  // ヘッダーにContent-Typeをプレーンテキストとして設定
  res.setHeader('Content-Type', 'text/plain');
  // レスポンスの本文として「Hello World」を返す
  res.end('Hello World\n');
});

// 指定したポートとホスト名でサーバーを待ち受け状態にする
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
