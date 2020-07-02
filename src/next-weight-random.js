(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.weightRandom = function (inSpec) {
    var i, j, table = [];
    var precision = 1;

    nx.forIn(inSpec, function (_, value) {
      var val = String(value).split('.')[1];
      precision = Math.max(precision, val.length);
    });

    var size = Math.pow(10, Math.min(precision, 3));


    for (i in inSpec) {
      // The constant 10 below should be computed based on the
      // weights in the spec for a correct and optimal table size.
      // E.g. the spec {0:0.999, 1:0.001} will break this impl.
      for (j = 0; j < inSpec[i] * size; j++) {
        table.push(i);
      }
    }

    return function () {
      return table[
        Math.floor(Math.random() * table.length)
      ];
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.weightRandom;
  }
})();
