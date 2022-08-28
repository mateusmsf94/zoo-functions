const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = species.map((el) => el.name);
const dayofWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function getOfficeHours(day) {
  const { open, close } = hours[day];
  return day === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close}pm`;
}

function getExibition(day) {
  return day === 'Monday' ? 'The zoo will be closed!'
    : species.filter((el) => el.availability.includes(day))
      .map((el) => el.name);
}

// function animalDay (animal) {
//   return species.find(el => el.name === animal).availability
// }
function result(param) {
  return { [param]: {
    officeHour: getOfficeHours(param),
    exhibition: getExibition(param),
  } };
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (animals.includes(scheduleTarget)) {
    return species.find((el) => el.name === scheduleTarget).availability;
  }
  if (dayofWeek.includes(scheduleTarget)) {
    return result(scheduleTarget);
  }
  const allDaysObj = dayofWeek.reduce((week, day) => ({ ...week,
    [day]: {
      officeHour: getOfficeHours(day),
      exhibition: getExibition(day),
    } }), {});
  return allDaysObj;
}

module.exports = getSchedule;
