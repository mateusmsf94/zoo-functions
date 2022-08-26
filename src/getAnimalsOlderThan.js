const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((el) => el.name === animal);
  return specie.residents.every((el) => el.age >= age);
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('giraffes', 10));
