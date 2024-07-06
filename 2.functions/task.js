'use strict'

function getArrayParams(...arr) {
  let min = Infinity;
  let max = - Infinity;
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max){
      max = arr[i];
    }
  }
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}  
/*console.log(getArrayParams(-99, 99, 10)) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10))  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5))  // { min: 5, max: 5, avg: 5 }*/

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0){
    return 0;
    } else {
    sum = arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    });
  }
  return sum;
}
//console.log(summElementsWorker(10, 45));

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = - Infinity;
  if (arr.length === 0){
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max - min;
}
//console.log(differenceMaxMinWorker())

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0){
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }  
  }
  return sumEvenElement - sumOddElement;
}
//console.log(differenceEvenOddWorker())

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0){
      sumEvenElement += arr[i];
      countEvenElement ++;
    } 
  }
  return sumEvenElement / countEvenElement;
}
//console.log(averageEvenElementsWorker(10, 4, 2, 7))

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;
  let res;
  let numbers;

  if(arrOfArr.length === 0){
    return 0;
  } 
  for(let i = 0; i < arrOfArr.length; i++) {
    numbers = arrOfArr[i];
    res = func(...numbers);
    if(res > maxWorkerResult){
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
