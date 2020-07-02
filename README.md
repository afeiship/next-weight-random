# next-weight-random
> Random has weight.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-weight-random
```

## usage
```js
import '@feizheng/next-weight-random';

const results = {};
const rand = nx.weightRandom({
  0: 0.75,
  1: 0.15,
  2: 0.1
});

for (let i = 0; i < 1000; i++) {
  const val = rand1();
  results[val] = results[val] || [];
  results[val].push(true);
}

const total = results[0].length + results[1].length + results[2].length;

console.log(
  results[0].length / total,
  results[1].length / total,
  results[2].length / total
);

// Run multple times:
// 0.765 0.129 0.106
// 0.751 0.152 0.097
// 0.778 0.135 0.087
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-weight-random/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-weight-random
[version-url]: https://npmjs.org/package/@feizheng/next-weight-random

[license-image]: https://img.shields.io/npm/l/@feizheng/next-weight-random
[license-url]: https://github.com/afeiship/next-weight-random/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-weight-random
[size-url]: https://github.com/afeiship/next-weight-random/blob/master/dist/next-weight-random.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-weight-random
[download-url]: https://www.npmjs.com/package/@feizheng/next-weight-random
