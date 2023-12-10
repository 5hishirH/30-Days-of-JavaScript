// Counter

var createCounter = function(n) {
    return function counter() {
        return n++;
    };
};
