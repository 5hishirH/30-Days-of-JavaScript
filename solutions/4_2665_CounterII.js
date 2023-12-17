// 2665. Counter II

var createCounter = function (init) {
  const n = init;
  const increment = () => ++init;
  const decrement = () => --init;
  const reset = () => {
    init = n;
    return init;
  };

  return { increment, decrement, reset };
};

const counter = createCounter(5);
console.log(counter.increment())
console.log(counter.reset())
