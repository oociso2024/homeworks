"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
      arr = [-b / (2 * a)];
  } else if (d > 0) {
      arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let i = s * (p + (p / (((1 + p)**countMonths) - 1)));
  let sum = i *  countMonths;
  return Number(sum.toFixed(2));
 
}