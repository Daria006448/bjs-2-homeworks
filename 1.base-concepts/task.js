"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  
  const d = b ** 2 - 4 * a * c;

  if (d < 0) return arr;
  const sqrtD = Math.sqrt(d); 

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + sqrtD) / (2 * a));
    arr.push((-b - sqrtD) / (2 * a));
  }


  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const credit = amount - contribution;
  const p = percent / 100 / 12;

  if (p === 0) {
    return credit;
  } 

  const montflyPayment = credit * (p * Math.pow(1 + p, countMonths)) / (Math.pow(1 + p, countMonths) - 1);
  return parseFloat((montflyPayment * countMonths).toFixed(2));
}

console.log(solveEquation(4, 5, 7));
console.log(calculateTotalMortgage(44, 2, 1900, 12))