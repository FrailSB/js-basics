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
//  * Basic operators
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

// /********************
//  * Coding challenge 1
//  ********************/

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

// /***************
//  * Boolean logic
//  ***************/

// var firstName = 'Frail';
// var age = 22;

// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.');
// }

// /********************************************
//  * The ternary operator and switch statements
//  ********************************************/

// var firstName = 'Frail';
// var age = 22;

// // Ternary operator
// age >= 18
//   ? console.log(firstName + ' drinks beer.')
//   : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // if (age >= 18) {
// //   var drink = 'beer';
// // } else {
// //   var drink = 'juice';
// // }

// // Switch statement
// var job = 'designer';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives and uber.');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs beautiful websites.');
//     break;
//   default:
//     console.log(firstName + ' does something else.');
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager.');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man.');
//     break;
//   default:
//     console.log(firstName + ' is a man.');
// }

// /************************************************
//  * Truthy and falsy values and equality operators
//  ************************************************/

// //  Falsy values: undefined, null, 0, '', NaN
// // Truthy values: NOT falsy values

// var height;

// height = 22;

// height || height === 0
//   ? console.log('Variable is defined')
//   : console.log('Variable has NOT been defined');

// // Equality operators
// if (height == '22') {
//   console.log('The == operator does type coercion!');
// }

// /********************
//  * Coding challenge 2
//  ********************/

// /**
//  * John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94, and 123 points.
//  *
//  * 1. Calculate the average score for each team
//  * 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
//  * 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
//  *
//  * 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner in the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
//  * 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
//  */

// var johnsTeamAverageScore = (89 + 120 + 103) / 3;
// var mikesTeamAverageScore = (116 + 94 + 123) / 3;

// console.log(johnsTeamAverageScore, mikesTeamAverageScore);

// // There's no draw option (try to find a draw option)
// johnsTeamAverageScore > mikesTeamAverageScore
//   ? console.log("John's team wins in average score.")
//   : console.log("Mike's team wins in average score.");

// // There is a draw option
// if (johnsTeamAverageScore > mikesTeamAverageScore) {
//   console.log("John's team wins in average score.");
// } else if (johnsTeamAverageScore === mikesTeamAverageScore) {
//   console.log("John and Mike's team both achieve the same average score.");
// } else {
//   console.log("Mike's team wins in average score.");
// }

// // Using switch
// switch (true) {
//   case johnsTeamAverageScore > mikesTeamAverageScore:
//     console.log("John's team wins in average score.");
//     break;
//   case johnsTeamAverageScore === mikesTeamAverageScore:
//     console.log("John and Mike's team both achieve the same average score.");
//     break;
//   default:
//     console.log("Mike's team wins in average score.");
// }

// // EXTRA
// var marysTeamAverageScore = (97 + 134 + 105) / 3;

// console.log(
//   johnsTeamAverageScore,
//   mikesTeamAverageScore,
//   marysTeamAverageScore
// );

// // Using if else
// if (
//   johnsTeamAverageScore > mikesTeamAverageScore &&
//   johnsTeamAverageScore > marysTeamAverageScore
// ) {
//   console.log("John's team wins in average score.");
// } else if (
//   mikesTeamAverageScore > johnsTeamAverageScore &&
//   mikesTeamAverageScore > marysTeamAverageScore
// ) {
//   console.log("Mike's team wins in average score.");
// } else if (
//   marysTeamAverageScore > johnsTeamAverageScore &&
//   marysTeamAverageScore > mikesTeamAverageScore
// ) {
//   console.log("Mary's team wins in average score");
// } else if (
//   johnsTeamAverageScore > marysTeamAverageScore &&
//   johnsTeamAverageScore === mikesTeamAverageScore
// ) {
//   console.log("John and Mike's team wins in average score");
// } else if (
//   johnsTeamAverageScore > mikesTeamAverageScore &&
//   johnsTeamAverageScore === marysTeamAverageScore
// ) {
//   console.log("John and Mary's team wins in average score");
// } else if (
//   mikesTeamAverageScore > johnsTeamAverageScore &&
//   mikesTeamAverageScore === marysTeamAverageScore
// ) {
//   console.log("Mike and Mary's team wins in average score");
// } else {
//   console.log('All the team wins');
// }

// // Using switch
// switch (true) {
//   case johnsTeamAverageScore > mikesTeamAverageScore &&
//     johnsTeamAverageScore > marysTeamAverageScore:
//     console.log("John's team wins in average score.");
//     break;
//   case mikesTeamAverageScore > johnsTeamAverageScore &&
//     mikesTeamAverageScore > marysTeamAverageScore:
//     console.log("Mike's team wins in average score.");
//     break;
//   case marysTeamAverageScore > johnsTeamAverageScore &&
//     marysTeamAverageScore > mikesTeamAverageScore:
//     console.log("Mary's team wins in average score");
//     break;
//   case johnsTeamAverageScore > marysTeamAverageScore &&
//     johnsTeamAverageScore === mikesTeamAverageScore:
//     console.log("John and Mike's team wins in average score");
//     break;
//   case johnsTeamAverageScore > mikesTeamAverageScore &&
//     johnsTeamAverageScore === marysTeamAverageScore:
//     console.log("John and Mary's team wins in average score");
//     break;
//   case mikesTeamAverageScore > johnsTeamAverageScore &&
//     mikesTeamAverageScore === marysTeamAverageScore:
//     console.log("Mike and Mary's team wins in average score");
//     break;
//   default:
//     console.log('All the team wins');
// }

// /***********
//  * Functions
//  ***********/

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// var frailAge = calculateAge(1997);
// var mikeAge = calculateAge(1995);
// var janeAge = calculateAge(1999);
// console.log(frailAge, mikeAge, janeAge);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired.');
//   }
// }

// yearsUntilRetirement(1997, 'Frail');
// yearsUntilRetirement(1995, 'Mike');
// yearsUntilRetirement(1999, 'Jane');

/*************************************
 * Function statements and expressions
 *************************************/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives a car.';
    case 'designer':
      return firstName + ' designs beautiful websites.';
    default:
      return firstName + ' does something else.';
  }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
