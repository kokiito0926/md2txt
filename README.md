## md2txt

md2txtは、マークダウンからプレーンテキストに変換することができるコマンドラインのツールです。  
大規模言語モデルが出力したマークダウンを、プレーンテキストに変換したりするのに最適かもしれません。

## インストール

```bash
$ npm install --global @kokiito0926/md2txt
```

## 使用方法

curlなどで取得したマークダウンをパイプでmd2txtに流し込みます。

```bash
$ curl -fsSL https://raw.githubusercontent.com/Kernix13/markdown-cheatsheet/refs/heads/master/frontmatter.md | md2txt
```

## ライセンス

[MIT](LICENSE)
