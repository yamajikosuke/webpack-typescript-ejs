# webpack-typescript-ejs
Webpack + TypeScript + Express の開発環境です。(テンプレートエンジンはEJS)  
ファイル変更時にブラウザを自動リロードします（Browsersync）。
# 使い方
〇パッケージのインストール  
　npm install  
〇開発サーバー起動  
　npm run dev  
〇開発サーバーのURL  
　http://localhost:3000  →　本番運用ではnginxで80番ポートにプロキシして公開  
　Browsersyncを使用しており、上記のURLを以下のURLにプロキシさせています。  
　http://localhost:3001  
　Browsersyncは監視対象ファイルに変更があった場合、ブラウザを自動でリロードしますので、こちらのURLを使用してください。
 
〇デプロイ  
　npm start  
  dist配下にミニファイされたJSファイルが生成されます。
# フォルダ構成
/  
│　.eslintrc(Lintの設定ファイル)  
│　.gitignore(Git設定ファイル)  
│　nodemon.json(nodemonの設定ファイル：ファイル変更の監視とサーバーの再起動)  
│　package.json  
│　README.md  
│　readme.txt  
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
├─src  
│　　index.ts（エントリポイント）  
│  
├─views（EJSのテンプレートファイル）  
│　└─pages  
│　　index.ejs  
│  
└─webpack（Webpackの設定ファイル）  
　　base.config.js  
　　dev.config.js  
　　prod.config.js  

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
