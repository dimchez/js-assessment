if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(sum, value) {
            return sum + value;
        }, 0);
    },

    remove : function(arr, item) {
        var copy = [];
        arr.forEach(function(value) {
            if(value != item) {
                copy.push(value);
            }
        });
        return copy;
    },

    removeWithoutCopy : function(arr, item) {
        var index = arr.indexOf(item);

        while(index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.reduce(function(count, value) {
            return value === item ? count + 1 : count;
        }, 0);
    },

    duplicates : function(arr) {
        var duplicates = [];
        
        arr.sort();

        for(var i = 0; i < arr.length - 2; i++) {
            if(arr[i] === arr[i + 1] && duplicates.indexOf(arr[i]) === -1) {
                duplicates.push(arr[i]);
            }
        }
        
        return duplicates;
    },

    square : function(arr) {
        return arr.map(function(value) {
            return value * value;
        });
    },

    findAllOccurrences : function(arr, target) {
        var occurances = [];
        arr.forEach(function(value, index) {
            if(value === target) {
                occurances.push(index);
            }
        });
        return occurances;
    }
  };
});
