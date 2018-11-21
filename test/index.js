var WeakMap = require('../cjs');

test();

delete require.cache[require.resolve('../cjs')];
delete global.WeakMap;

WeakMap = require('../cjs');
test();

function test() {
  var a = {};
  var b = {};
  var c = {};

  var ws1 = new WeakMap;
  var ws2 = new WeakMap([[a, b]]);

  console.assert(ws1.has(a) === false);
  console.assert(ws1.set(a, 123) === ws1);
  console.assert(ws1.has(a) === true);
  console.assert(ws1.get(a) === 123);
  console.assert(ws1.delete(a) === true);
  console.assert(ws1.has(a) === false);
  console.assert(ws1.get(a) === void 0);

  console.assert(ws2.has(a) === true);
  console.assert(ws2.has(b) === false);
  console.assert(ws2.get(a) === b);
  console.assert(ws2.delete(a) === true);
  console.assert(ws2.has(a) === false);
}
