## 使い方
### セットアップ
1. `$ git clone https://github.com/naoya0x00/webpack4-lesson`
2. `$ cd webpack4-lesson`
3. `$ npm install`

### 起動
1. webpack4-lessonのルートディレクトリに移動します。
2. `$ npm start`

### 開発を始める
1. webpack4-lessonのルートディレクトリに移動します。
2. `$ npm run start:dev`
3. コードを作成、編集します。

## マップ
### ディレクトリ
#### `rust-lib`
Rustのクレートです。これはWASMにコンパイルされ、TypeScriptでインポートされます。

#### `src`
HTML, TypeScript, SCSSのソースコードがあります。これらはWebpackによってバンドルされ`dist`ディレクトリに出力されます。

### ファイル
#### `src/index.ts`
Webpackのバンドル時のエントリーファイルです。ここでは、TypeScript, SCSSのインポートを行います。
