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