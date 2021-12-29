# auth
firebaseを使ったバックエンド付きAuth

# MEMO

- firebaseAuthのTOKENの有効期限は1時間

ログインしていないといけないもの

↓

ログインしているかでOK
(PrivateRouterとか)


本人がログインしていないといけないもの

↓

・基本的にはバックエンドからデータを取り出すときにTOKENも送信し、認証された場合は渡す

・本人ログインの場合は削除ボタンを出すとかいうときには、mailを照らし合わせてボタンを出すけど、実際にAPIを叩いたときには上で弾かれる時もある

# TODO

- emailがあっている場合編集ボタンを作る
- 編集画面を作る
- バックエンドで認証してから編集を反映させる仕組みを作る