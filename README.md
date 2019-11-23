# webpack-typescript-ejs
Webpack + TypeScript + Express の開発環境です。(テンプレートエンジンはEJS)  
ファイル変更時にブラウザを自動リロードします（Browsersync）。
# 使い方
開発サーバー起動  
　npm run dev  
開発サーバーのURL  
　http://localhost:3001  
デプロイ  
　npm start  
  
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
