'use strict'

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = arr.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	});
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length === 0) {
		return 0;
	} 
	sum = arr.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	});
	
	return sum;
}


function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max - min;
}


function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	
	if (arrOfArr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arrOfArr.length; i++) {
		let res = func(...arrOfArr[i]);
		if (res > maxWorkerResult) {
			maxWorkerResult = res;
		}
	}
	return maxWorkerResult;
}

