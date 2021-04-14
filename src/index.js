(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var normailzeRatio = function (inSpec) {
    var result = {};
    if (!Array.isArray(inSpec)) return inSpec;
    inSpec.forEach(function (item, index) {
      result[index] = item;
    });
    return result;
  };

  nx.weightRandom = function (inSpec) {
    var i,
      j,
      table = [];
    var precision = 1;
    var spec = normailzeRatio(inSpec);

    nx.forIn(spec, function (_, value) {
      var val = String(value).split('.')[1];
      precision = Math.max(precision, val.length);
    });

    var size = Math.pow(10, Math.min(precision, 3));

    for (i in spec) {
      // The constant 10 below should be computed based on the
      // weights in the spec for a correct and optimal table size.
      // E.g. the spec {0:0.999, 1:0.001} will break this impl.
      for (j = 0; j < spec[i] * size; j++) {
        table.push(i);
      }
    }

    return function () {
      return table[Math.floor(Math.random() * table.length)];
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.weightRandom;
  }
})();
