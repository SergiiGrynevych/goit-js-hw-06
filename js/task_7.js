// // //////////////// Условие - массив обьектов //////////////////
// // ////////////////// Само решение задачи /////////////////////

// const findBestEmployee = function (employees) {
//   "use strict";
//   const entries = Object.entries(employees);
//   if (entries.length !== 0) {
//     let bestEmployee = entries[0];
//     for (const entry of entries) {
//       if (entry[1] > bestEmployee[1]) {
//         bestEmployee = entry;
//       }
//     }
//     return bestEmployee[0];
//   }
//   return "";
// };

const findBestEmployee = function (employees) {
  return Object.entries(employees).reduce((max, n) =>
    n[0] > max[0] ? n : max
  );
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
