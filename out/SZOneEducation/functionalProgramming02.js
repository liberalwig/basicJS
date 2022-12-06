function _go(arg) {
    var fns = _rest(arguments);
    return _pipe.apply(null, fns)(arg);
}


function _pipe() {
    var fns = arguments;
    return function(arg) {
        return _reduce(fns, function (arg, fn) {
            return fn(arg);
        }, arg);
    }
}

var slice = Array.prototype.slice;

function _rest(list, num) {
    return slice.call(list, num || 1);
}


function _reduce(list, iter, memo) {
    if (arguments.length == 2) {
        memo = list[0];
        list = _rest(list);
    }
    _each(list, function (val) {
        memo = iter(memo, val);
    });
    return memo;
}


function _filter(list, predi) {
    var new_list = [];
    _each(list, function (val) {
        if (predi(val)) {
            new_list.push(val);
        }
    });
    return new_list;
}

function _map(list, mapper) {
    var new_list = [];
    _each(list, function (val, key) {
        new_list.push(mapper(val, key)
        )
    });
}




