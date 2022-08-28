const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  const { child, adult, senior } = countEntrants(entrants);
  return child * 20.99 + adult * 49.99 + senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
