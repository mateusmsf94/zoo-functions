const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(arr) {
  return arr.map((el) => species.find((spc) => spc.id === el).name);
}
function getLocation(arr) {
  return arr.map((el) => species.find((spc) => spc.id === el).location);
}

function getData({ id, firstName, lastName, responsibleFor }) {
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getLocation(responsibleFor),
  };
}

function handleInput({ name, id }) {
  let employe;
  if (id) {
    employe = employees.find((el) => el.id === id);
  }
  if (name) {
    employe = employees.find((el) => el.firstName === name || el.lastName === name);
  }
  if (employe === undefined) throw new Error('Informações inválidas');
  return employe;
}

function getEmployeesCoverage(empl) {
  let employe;
  if (!empl) {
    employe = employees.map((el) => getData(el));
    return employe;
  }
  employe = handleInput(empl);

  return getData(employe);
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
