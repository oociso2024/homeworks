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

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
