// /**************************
//  * Variables and data types
//  **************************/

// var firstName = 'John Frail';
// console.log(firstName);

// var lastName = 'Bongat';
// var age = 22;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Software Developer';
// console.log(job);

// /*************************************
//  * Variable mutation and type coercion
//  *************************************/

// // Type coercion
// console.log(firstName + ' ' + age);

// var secondJob, isMarried;
// secondJob = 'Web Developer';
// isMarried = false;

// console.log(
//   firstName +
//     ' is ' +
//     age +
//     ' years old.' +
//     ' Working as a ' +
//     secondJob +
//     '. Is he married? ' +
//     isMarried
// );

// // Variable mutation
// age = 'twenty-two';
// secondJob = 'Web Designer';

// alert(
//   firstName +
//     ' is ' +
//     age +
//     ' years old.' +
//     ' Working as a ' +
//     secondJob +
//     '. Is he married? ' +
//     isMarried
// );

// var middleName = prompt('Enter ' + firstName + ' middle name.');
// console.log(firstName + ' ' + middleName + ' ' + lastName);

// /*****************
//  * Basic Operators
//  *****************/

// var year, yearJohn, yearMark, ageJohn, ageMark;
// year = 2020;
// ageJohn = 22;
// ageMark = 33;
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;

// console.log(yearJohn);

// // Math operators
// console.log(year + 2);
// console.log(year * 2);
// console.log(year / 10);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // Typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

// /*********************
//  * Operator precedence
//  *********************/

// var now, yearJohn, fullAge;
// now = 2020;
// yearJohn = 1997;
// fullAge = 22;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 22;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

// /******************
//  * Coding Challenge
//  ******************/

// /**
//  * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
//  * BMI = mass / height^2 = mass / (height * height).
//  * (mass in kg and height in meter).
//  *
//  * 1. Store Mark's and John's mass and height in variables
//  * 2. Calculate both their BMIs
//  * Create a boolean variable containing information about whether Mark has a higher BMI than John.
//  * Print a string to the console containing the variable from step3. (Something like "Mark's BMI higher than John's? true").
//  */

// var markMass, johnMass, markHeight, johnHeight;

// markMass = 68;
// johnMass = 51;

// markHeight = 1.6;
// johnHeight = 1.5;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var isMarkHigher = markBMI > johnBMI;

// console.log("Mark's BMI higher than John's? " + isMarkHigher);

// /**********************
//  * If / else statements
//  **********************/

// var firstName = 'Frail';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is still single!');
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is still single!');
// }

// // Improve coding challenge with conditions
// var markMass, johnMass, markHeight, johnHeight;

// markMass = 68;
// johnMass = 51;

// markHeight = 1.6;
// johnHeight = 1.5;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var isMarkHigher = markBMI > johnBMI;

// if (isMarkHigher) {
//   console.log("Mark's BMI is higher than John's.");
// } else {
//   console.log("John's BMI is higher than Mark's.");
// }
// // console.log("Mark's BMI higher than John's? " + isMarkHigher);

/***************
 * Boolean logic
 ***************/

var firstName = 'Frail';
var age = 22;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
