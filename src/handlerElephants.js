const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');

const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;

const computeData = (param, elephants) => {
  if (!['count', 'names', 'averageAge'].includes(param)) return null;
  const methods = {
    count() { return elephants.residents.length; },
    names() { return elephants.residents.map((elephant) => elephant.name); },
    averageAge() { return averageAge(elephants); },

  };

  return methods[param]();
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};

module.exports = handlerElephants;
