# 概要
Webpack + TypeScript(以下、TSと表記) + Express の開発環境です。(テンプレートエンジンはEJS)  
監視対象のファイルが変更された場合、ブラウザを自動リロードします（Browsersync）。
# 使い方
## パッケージのインストール  
　`npm install`  

## 開発サーバー起動  
　`npm run dev`  
  
## 開発サーバーURL  
　下記URLにアクセスしてください。  
　http://localhost:3001  
　Browsersyncを使用しており、後述のポート番号3000を上記URLにプロキシさせています。  
　Browsersyncは監視対象ファイルに変更があった場合、ブラウザを自動でリロードします。  
　views配下とpulic配下のファイルが、監視対象になります。(※src配下のTSファイルは監視対象になりません。F5を押下してください)  
  
## 本番サーバー（ビルドとサーバー起動）  
　本番運用の起動コマンドです（production）。  
　`npm start`  
　ローカル環境では以下のURLにアクセスしてください。  
　http://localhost:3000 （本番ではnginxで80番ポートにプロキシして公開）  
　dist配下にミニファイされたJSファイル（server.js）がビルドされ、そのファイルを読み込んでサーバーが起動します。  
  
## 開発段階のTSファイルのトランスパイルについて  
　開発段階ではTSファイルは、JSファイルにトランスパイルされません。  
　メモリ上にJSファイルが生成されます。

## TSの構文チェックと修正  

　構文チェック：`npm run lint`  

　修正`npm run lint:fix`  


# フォルダ構成
/  
│　.eslintrc(Lintの設定ファイル)  
│　.gitignore(Git設定ファイル)  
│　nodemon.json(nodemonの設定ファイル：ファイル変更の監視とサーバーの再起動)  
│　package.json  
│　README.md  
│　tsconfig.json（typescript設定）  
│  
├─.vscode  
│　　launch.json  
│  
├─dist  
│　　server.js（npm startでデプロイされるファイル）  
│  
├─public（ドキュメントルート：CSSや画像を格納）  
│　└─images  
│　　icon-csvfile.png  
│  
├─src  TSファイルはこのフォルダに格納してください。  
│　　index.ts（エントリポイント）  
│  
├─views（EJSのテンプレートファイル）  
│　└─pages  
│　　index.ejs  
│  
└─webpack（Webpackの設定ファイル）  
　　base.config.js  
　　dev.config.js  (現在未使用)  
　　prod.config.js  （本番用のビルド設定 base.config.jsをインクルード）  

# デバッグ
chromeのデベロッパーツールによるデバッグ方法  
１．nodemon.jsを編集  
　"exec": "ts-node ./src/index.ts",  
　　　↓↓↓  
　"exec": "node --inspect -r ts-node/register ./src/index.ts"  
  
２．chromeで以下にアクセス  
　chrome://inspect/#devices  
  
デバッガ―の使い方の参考  
  https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7  
  
# テスト
Jestを使用予定（未統合）  
https://github.com/yamajikosuke/jest-test  
  
# 参考サイト
https://qiita.com/isihigameKoudai/items/4b790b5b2256dec27d1f
