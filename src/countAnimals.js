const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal = {}) {
  if (Object.keys(animal).length === 0) {
    return species.reduce(
      (acc, currSpc) =>
        Object.assign(acc, { [currSpc.name]: currSpc.residents.length }),
      {},
    );
  }

  const find1 = species.find((spc) => spc.name === animal.specie);
  if (Object.keys(animal).length === 1) {
    return find1.residents.length;
  }

  if (Object.keys(animal).length === 2) {
    const result = find1.residents.filter((el) => el.sex === animal.sex);
    return result.length;
  }
}

module.exports = countAnimals;
