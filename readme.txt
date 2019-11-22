https://qiita.com/isihigameKoudai/items/4b790b5b2256dec27d1f

Express + Webpack の開発環境で auto reload する
https://qiita.com/hedrall/items/8f96584ba02734927610

ゼロからはじめるExpress + Node.jsを使ったアプリ開発
https://qiita.com/nkjm/items/723990c518acfee6e473



https://mukoiri-engineer.com/typescript-webpack-environment/

https://aknow2.hatenablog.com/entry/2018/09/03/155846
https://qiita.com/mangano-ito/items/75e65071c9c482ddc335

デバッグ
以下を修正（nodemon.jsn）
    //"exec": "ts-node ./src/index.ts",
    "exec": "node --inspect -r ts-node/register ./src/index.ts"

chromeで以下にアクセス
chrome://inspect/#devices

デバッガ―の使い方の参考 
    https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7