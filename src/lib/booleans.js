function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  if (a == false && b == false) {
    return true;
  }
  return false;
};

function one(a, b) {
  return (a && !b || !a && b);
};


function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return Math.abs(a % 2) == 1;
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0;
};


function startsWith(char, string) {
  if (char === string.substring(0, 1)) {
    return true
}
  return false;
  // return (string.substring(0, 1) === char;
}

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  }
  return false
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
  return true;
  }
  return false;
} // return string.toLowerCase() === string;

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};