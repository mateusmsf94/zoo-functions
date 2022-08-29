const data = require('../data/zoo_data');

// function getAnimalinArea(area) {
//   return species.filter((el) => el.location.includes(area))
//     .map((el) => el.name);
// }

// const empty = (includeNames, sorted, sex) => !includeNames && !sorted && !sex;

// function filterHandler({ includeNames, sorted, sex }) {
//   if (empty(includeNames, sorted, sex)) {

//   }
// }

// const defautlObj = {
//   NE: getAnimalinArea('NE'),
//   NW: getAnimalinArea('NW'),
//   SE: getAnimalinArea('SE'),
//   SW: getAnimalinArea('SW'),
// };

// arrLoc = Object.keys(defautlObj);

// function getAllI(arr) {
//   arr.map((el) => ({
//     [el]: [species.filter((el) => el.location.includes(el))
//       .map((el) => ({
//         [el.name]: el.residents.map((el) => el.name),
//       }))],
//   }));
// }

// const animalsNE = species.filter((el) => el.location.includes('NE'))
//   .map((el) => ({
//     [el.name]: el.residents.map((el) => el.name),
//   }));

// const animalsNW = species.filter((el) => el.location.includes('NW'))
//   .map((el) => ({
//     [el.name]: el.residents.map((el) => el.name),
//   }));
// const animalsSE = species.filter((el) => el.location.includes('SE'))
//   .map((el) => ({
//     [el.name]: el.residents.map((el) => el.name),
//   }));
// const animalsSW = species.filter((el) => el.location.includes('SW'))
//   .map((el) => ({
//     [el.name]: el.residents.map((el) => el.name),
//   }));

// function test(animal) {
//   return ['NE', 'NW', 'SE', 'SW'].forEach((el) => {
//     animal[el].sort();
//   });
// }

// console.log(test(animalsNE));

// function getFilterIncludeName(includeNames) {
//   if (includeNames) {
//     return {
//       NE: animalsNE,
//       NW: animalsNW,
//       SE: animalsSE,
//       SW: animalsSW,

//     };
//   }
// }
// console.log(getFilterIncludeName(true));

// function getSorted() {
//   return {
//     NE: test(animalsNE),
//     NW: test(animalsNW),
//     SE: test(animalsSE),
//     SW: test(animalsSW),
//   };
// }

function getAnimalMap(options) {
//   if (!options) { return defautlObj; }
//   const { includeNames, sorted, sex } = options;
//   if (!includeNames) { return defautlObj; }
//   if (sorted) {
//     return getSorted();
//   }
//   return getFilterIncludeName(includeNames);
}

module.exports = getAnimalMap;
