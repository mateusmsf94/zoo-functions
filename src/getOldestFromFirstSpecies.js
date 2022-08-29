const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimal(idAnimal) {
  return species.find((el) => el.id === idAnimal);
}

// const example = getAnimal('0938aa23-f153-4937-9f88-4858b24d6bce');
// console.log(example.residents.reduce((oldest, curr) => {
// return oldest.age < curr.age ? curr : oldest} ))

function getOlder({ residents }) {
  const result = residents.reduce((oldest, curr) => (oldest.age < curr.age ? curr : oldest));
  return Object.values(result);
}
// console.log(getOlder(example))

// console.log(getAnimal('0938aa23-f153-4937-9f88-4858b24d6bce'))

function getOldestFromFirstSpecies(id) {
  const employe = employees.find((el) => el.id === id);
  const firstSpecie = employe.responsibleFor[0];
  return getOlder(getAnimal(firstSpecie));
}

module.exports = getOldestFromFirstSpecies;
