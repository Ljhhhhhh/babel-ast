import fs from 'fs';
import path from 'path';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

const content = fs.readFileSync(
  path.resolve(path.join(__dirname, './origin.ts')),
  { encoding: 'utf-8' },
);

const ast = parser.parse(content, {
  sourceType: 'module',
  plugins: ['typescript', 'jsx'],
});

// console.log(ast, 'ast is here');

traverse(ast, {
  ObjectProperty(path) {
    const keyName = path.get('key').node.name;
    console.log(keyName, 'keyName');
  },
});

// // fs.writeFile(
// //   path.resolve(path.join(__dirname, './temp.js')),
// //   '2',
// //   'utf8',
// //   function (error) {
// //     if (error) {
// //       return false;
// //     }
// //     console.log('成功');
// //   },
// // );
