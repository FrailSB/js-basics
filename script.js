// /**************************
//  * Variables and data types
//  */

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
//  */

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
//  */

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
//  */

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
//  */

// /*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height^2 = mass / (height * height). (Mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step3. (Something like "Mark's BMI higher than John's? true").
// */

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
//  */

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
//  */

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
//  */

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
//  */

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
//  */

// /*
// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94, and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner in the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
// */

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
//  */

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

// /*************************************
//  * Function statements and expressions
//  */

// // Function declaration
// // function whatDoYouDo(job, firstName) {}

// // Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code.';
//     case 'driver':
//       return firstName + ' drives a car.';
//     case 'designer':
//       return firstName + ' designs beautiful websites.';
//     default:
//       return firstName + ' does something else.';
//   }
// };

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

// /********
//  * Arrays
//  */

// // Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names.length);

// // Mutate array data
// names[2] = 'Bob';
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types

// var john = ['John', 'Smith', 1990, 'developer', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf('developer'));

// var isDesigner =
//   john.indexOf('designer') === -1
//     ? 'John is not a designer'
//     : 'John is a designer;';

// console.log(isDesigner);

// /********************
//  * Coding challenge 3
//  */

// /*
// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// 1.) Containing all three tips (one for each bill)
// 2.) Containing all three final paid amounts (bill + tip).

// (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
// */

// var tipCalculator = function(amount) {
//   switch (true) {
//     case amount < 50:
//       return amount * 0.2;
//     case amount >= 50 && amount <= 200:
//       return amount * 0.15;
//     default:
//       return amount * 0.1;
//   }
// };

// function finalAmountCalculator(amount) {
//   return amount + tipCalculator(amount);
// }

// var bills = [124, 48, 268];

// var tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2])
// ];

// var finalAmount = [
//   finalAmountCalculator(bills[0]),
//   finalAmountCalculator(bills[1]),
//   finalAmountCalculator(bills[2])
// ];

// console.log(bills);
// console.log(tips);
// console.log(finalAmount);

// /************************
//  * Objects and properties
//  */

// // Object literal
// var frail = {
//   firstName: "Frail",
//   lastName: "Bongat",
//   birthYear: 1990,
//   hobbies: ["Tennis", "Gaming", "Coding"],
//   job: "developer",
//   isMarried: false
// };
// console.log(frail.firstName);
// console.log(frail["lastName"]);
// var x = "birthYear";
// console.log(frail[x]);

// frail.job = "designer";
// console.log(frail);

// // New object syntax
// var jane = new Object();
// jane.name = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";
// console.log(jane);

// /*********************
//  * Objects and methods
//  */

// var frail = {
//   firstName: 'Frail',
//   lastName: 'Bongat',
//   birthYear: 1997,
//   hobbies: ['Tennis', 'Gaming', 'Coding'],
//   job: 'developer',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2020 - this.birthYear;
//   }
// };

// frail.calcAge();
// console.log(frail);

// /******************
//  * Coding challenge 4
//  */

// /*
// Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

// 1. For each of them, create an object with properties for their full name, mass, and height.
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

// REMEMBER: BMI = mass / height^2 = mass / (height * height). (Mass in kg and height in meter).
// */

// var frail = {
//   name: 'Frail Bongat',
//   mass: 50,
//   height: 1.52,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
// var mark = {
//   name: 'Mark Doe',
//   mass: 75,
//   height: 1.56,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// switch (true) {
//   case frail.calcBMI() > mark.calcBMI():
//     console.log(frail.name + ' has the highest BMI of ' + frail.bmi + '.');
//     break;
//   case frail.bmi === mark.bmi:
//     console.log(frail.name + ' and ' + mark.name + ' both have the same BMI.');
//     break;
//   default:
//     console.log(mark.name + ' has the highest BMI of ' + mark.bmi + '.');
// }

// /*********************
//  * Loops and iteration
//  */

// // For loop
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// // i = 0, 0 < 10 true, log i to console, i++
// // i = 1, 1 < 10 true, log i to console, i++
// // ...
// // i = 9, 9 < 10 true, log i to console, i++
// // i = 10, 10 < 10 false, exit the loop

// var frail = ['Frail', 'Smith', 1990, 'developer', false];

// for (var i = 0; i < frail.length; i++) {
//   console.log(frail[i]);
// }

// // While loop
// var i = 0;
// while (i < frail.length) {
//   console.log(frail[i]);
//   i++;
// }

// // Continue and break statements
// for (var i = 0; i < frail.length; i++) {
//   if (typeof frail[i] !== 'string') continue;
//   console.log(frail[i]);
// }

// for (var i = 0; i < frail.length; i++) {
//   if (typeof frail[i] !== 'string') break;
//   console.log(frail[i]);
// }

// // Challenge: Lopping backwards
// for (var i = frail.length - 1; i >= 0; i--) {
//   console.log(frail[i]);
// }

// /********************
//  * Coding challenge 5
//  */

// /*
// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180, and $42.
// John likes to tip 20% of the bill when the bills is less than $50, 15% when the bills is between $50 and $200, and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values.
// 2. Add a method to calculate the tip.
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
// 4. As an output, create
//   1) A new array containing all tips, and
//   2) An array containing final paid amounts (bill + tip).
//   HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

// EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 restaurants. The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bills is more than $300 (different than John).

// 5. Implement the same functionality before, this time using Mark's tipping rules.
// 6. Create a function (not a method) to calculate the average of a given array tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average).
// 7. Calculate the average tip for each family.
// 8. Log to the console which family paid the highes tips on average.
// */

// var john = {
//   bills: [124, 48, 268, 180, 42],
//   tips: [],
//   finalAmount: [],
//   calcTip: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       switch (true) {
//         case this.bills[i] < 50:
//           john.tips.push(this.bills[i] * 0.2);
//           break;
//         case this.bills[i] >= 50 && this.bills[i] <= 200:
//           john.tips.push(this.bills[i] * 0.15);
//           break;
//         default:
//           john.tips.push(this.bills[i] * 0.1);
//           break;
//       }
//     }
//   },
//   calcAmount: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       john.finalAmount.push(this.bills[i] + this.tips[i]);
//     }
//   }
// };

// john.calcTip();
// john.calcAmount();
// console.log(john);

// // EXTRA
// var mark = {
//   bills: [77, 375, 110, 45],
//   tips: [],
//   finalAmount: [],
//   calcTip: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       switch (true) {
//         case this.bills[i] < 100:
//           mark.tips.push(this.bills[i] * 0.2);
//           break;
//         case this.bills[i] >= 100 && this.bills[i] <= 300:
//           mark.tips.push(this.bills[i] * 0.1);
//           break;
//         default:
//           mark.tips.push(this.bills[i] * 0.25);
//           break;
//       }
//     }
//   },
//   calcAmount: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       mark.finalAmount.push(this.bills[i] + this.tips[i]);
//     }
//   }
// };

// mark.calcTip();
// mark.calcAmount();
// console.log(john, mark);

// function averageTip(tips) {
//   sum = 0;
//   for (var i = 0; i < tips.length; i++) {
//     sum += tips[i];
//   }
//   return sum / tips.length;
// }

// console.log(averageTip(john.tips), averageTip(mark.tips));

// // No draw
// averageTip(john.tips) > averageTip(mark.tips)
//   ? console.log("John's family paid the highest tip in average.")
//   : console.log("Mark's family paid the highest tip in average");

// // With draw
// if (averageTip(john.tips) > averageTip(mark.tips)) {
//   console.log("John's family paid the highest tip in average.");
// } else if (averageTip(john.tips) < averageTip(mark.tips)) {
//   console.log("Mark's family paid the highest tip in average");
// } else {
//   console.log("Both Mark and John's family paid the same tip");
// }

/*
1997 - ECMASCript 1 is the first JavaScript
2009 - ES5 lots of new features
2015 - ES6 the biggest update to the language
2015 - Annual release cycle (ES6 -2016, etc)
*/
