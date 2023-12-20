// Return Length of Arguments Passed

var argumentsLength = function (...args) {
  let i = 0;
  for (i; args[i] !== undefined; i++);

  return i;
};

console.log(argumentsLength({}, null, "3"));
