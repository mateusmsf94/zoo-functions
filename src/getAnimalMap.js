const { species } = require('../data/zoo_data');

function makeAnimalMap(specie, sorted, sex) {
  const animalsNames = specie.residents
    .filter((animal) => animal.sex === sex || sex === 'all')
    .map((animal) => animal.name);

  if (sorted) animalsNames.sort();
  const result = {};
  result[specie.name] = animalsNames;

  return result;
}

function getAnimalMap(options = {}) {
  const initObj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  const { includeNames = false, sorted = false, sex = 'all' } = options;
  if (!includeNames) {
    species.forEach((spc) => initObj[spc.location].push(spc.name));
  } else {
    species.forEach((spc) => initObj[spc.location].push(makeAnimalMap(spc, sorted, sex)));
  }

  return initObj;
}

module.exports = getAnimalMap;
