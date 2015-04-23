if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      if(!obj) {
        return [];
      }

      return Object.keys(obj).reduce(collectValues(obj), []);
    }
  };

  function collectValues(obj) {
    return function(values, key) {
      values.push(key + ': ' + obj[key]);
      return values;
    };
  }
});
