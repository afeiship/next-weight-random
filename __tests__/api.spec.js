const nx = require('@feizheng/next-js-core2');
require('../src/next-weight-random');

describe('api.basic test', () => {
  test('nx.weightRandom', function() {
    var results = {};
    var rand1 = nx.weightRandom({
      0: 0.75,
      1: 0.15,
      2: 0.1
    });

    for (let i = 0; i < 1000; i++) {
      var val = rand1();
      results[val] = results[val] || [];
      results[val].push(true);
    }

    var total = results[0].length + results[1].length + results[2].length;

    console.log(
      results[0].length / total,
      results[1].length / total,
      results[2].length / total
    );

  });
});
