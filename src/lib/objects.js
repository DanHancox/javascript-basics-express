const createPerson = (name, age) => {
  person = {
    name,
    age,
  }
  return person
};


const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  let test = property === 'name' ? object.name: object.age;
  return test
};

const hasProperty = (property, object) => {

  return Object.hasOwn(object, property);
  

};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
    return false;
};

const getAges = people => {
  const ageArray = people.map(array => array.age);
  return ageArray;
};

const findByName = (name, people) => {
  const findName = people.find (x => x.name === name);
  return findName;
};

const findHondas = cars => {
  const FindHonda = cars.filter(honda => honda.manufacturer === 'Honda');
  return FindHonda;
};

const averageAge = people => {
  const totalAge = people.reduce((prevAge, current) => prevAge + current.age, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce: guestName => {
      return `Hi ${guestName}, my name is ${name} and I am ${age}!`;
    }
  };
  return person
};


module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
