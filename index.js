#!/usr/bin/env node

// >> $ curl -fsSL https://raw.githubusercontent.com/kokiito0926/fmeditor/refs/heads/main/README.md | ./index.js 
// >> $ curl -fsSL https://raw.githubusercontent.com/Kernix13/markdown-cheatsheet/refs/heads/master/frontmatter.md | ./index.js

import { stdin } from "zx";
import matter from "gray-matter";
import { markdownToTxt } from "markdown-to-txt";

if (process.stdin.isTTY) {
	process.exit(1);
}

const markdown = await stdin();
if (!markdown) {
	process.exit(1);
}

const doc = matter(markdown);

const txt = markdownToTxt(doc.content);
console.log(txt);
