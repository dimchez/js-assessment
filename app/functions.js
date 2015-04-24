if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {
        var functions = [];
        arr.forEach(function(value) {
            functions.push(function() {
                return fn.call(null, value);
            });
        });
        return functions;
    },

    partial : function(fn, str1, str2) {
        var args = [str1, str2];
        return function(str3) {
            args.push(str3);
            return fn.apply(null, args);
        };
    },

    useArguments : function() {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(sum, value) {
            return sum + value;
        }, 0);
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);
        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);
        return function() {
            args = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, args);
        };
    },

    curryIt : function(fn) {
        var args = Array.prototype.slice.call(arguments),
            self = this;

        if(args.length - 1 < fn.length) {
            return function(arg) {
                args.push(arg);
                return self.curryIt.apply(self, args);
            };
        } else {
            args.splice(0, 1);
            return fn.apply(null, args);
        }
    }
  };
});
