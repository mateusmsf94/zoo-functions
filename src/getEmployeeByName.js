const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  try {
    const resut = employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
    if (resut === undefined) {
      throw new Error('Informações inválidas');
    }
    return resut;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = getEmployeeByName;
