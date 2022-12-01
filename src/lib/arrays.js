const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString([]);
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};


const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map((string) => {
    return string.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(order =>
    order
      .split('') //seperate/split array
      .reverse() // reverse the order
      .join('') // put back together
  );
};

const onlyEven = numbers => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
      numbers.splice(i, 1);
    }
  }
  return numbers;
};


const removeNthElement2 = (index, array) => {
    let array2 = [...array];
    array2.splice(1);
    return array2
};

const elementsStartingWithAVowel = strings => {
  const vowels = /^[aeiou]/gi;
  const filtering = strings.filter(result => vowels.test(result));
  return filtering;
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));
};




module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
