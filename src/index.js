const parser = require('@babel/parser');

var content = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(JSON.stringify(content), {});

console.log(ast, 'ast');
