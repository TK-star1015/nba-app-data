/* NBA BEAT — Service Worker（静的サイトで可能な範囲）
   注意：このファイルは assets/ 配下に置かれるため、Service Worker のスコープは
   assets/ 以下に限られ、トップページ（index.html）自体は制御できない。
   そのためオフラインキャッシュやバックグラウンドのプッシュ通知は行わない。
   登録に成功しても実質的な制御は発生せず、失敗してもページの動作には影響しない。
   バックグラウンド通知が必要な場合は、サーバー側の Push 配信基盤が別途必要。 */
self.addEventListener("install", function (e) { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) { /* ネットワーク優先：何も横取りしない */ });
