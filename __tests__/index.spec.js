(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.weightRandom with object params', function () {
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

      console.log(results[0].length / total, results[1].length / total, results[2].length / total);
    });
  });

  test('nx.weightRandom with array params', function () {
    var results = {};
    var rand1 = nx.weightRandom([
      { index: 0, value: 0.75 },
      { index: 1, value: 0.15 },
      { index: 2, value: 0.1 }
    ]);

    for (let i = 0; i < 1000; i++) {
      var val = rand1();
      results[val] = results[val] || [];
      results[val].push(true);
    }

    var total = results[0].length + results[1].length + results[2].length;

    console.log(results[0].length / total, results[1].length / total, results[2].length / total);
  });
})();
