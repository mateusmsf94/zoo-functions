const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } if (ids.length === 1) {
    const result = [];
    result.push(species.find((specie) => specie.id === ids[0]));
    return result;
  }
  const resultAr = [];
  species.forEach((specie) => {
    if (ids.includes(specie.id)) {
      resultAr.push(specie);
    }
  });
  return resultAr;
}

module.exports = getSpeciesByIds;
