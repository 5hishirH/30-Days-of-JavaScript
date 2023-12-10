// To Be Or Not To Be
var expect = function (val) {
  const toBe = function (n) {
    if (val === n) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };

  const notToBe = function (n) {
    if (val !== n) {
      return true;
    } else {
      throw new Error("Equal");
    }
  };
  return { toBe, notToBe };
};
