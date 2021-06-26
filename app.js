"use strict";

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = [];

//Function 1
modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);
console.log(foods);

//Function 2
modifiedFood = foods;
modifiedFood.splice(2, 0, "noodles", "icecream");
console.log(modifiedFood);

const numberArray = [12, 324, 7, 213, 4, 2, 3, 45, 4234];

//Function 3
const isEven = function (array) {
	return array.filter((ele) => ele % 2 === 0);
};
console.log(isEven(numberArray));

//Function 4
const isPrime = (num) => {
	for (let i = 2; i < num; i++) if (num % i === 0) return false;
	return num > 1;
};

const nonPrime = function (array) {
	return array.filter((ele) => !isPrime(ele));
};
console.log(nonPrime(numberArray));

//Function 5
const isEvenLambda = (array) => array.filter((ele) => ele % 2 === 0);
console.log(isEvenLambda(numberArray));

const myArray = [11, 34, 20, 5, 53, 16];

//Function 6
const findSquareOfNumbers = (array) => array.map((ele) => ele * ele);
console.log(findSquareOfNumbers(myArray));

//Function 7
const MultiplyArr = [2, 3, 5, 10];
const multiply = (array) => array.reduce((acc, ele) => acc * ele, 1);
console.log(multiply(MultiplyArr));
