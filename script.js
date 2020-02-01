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

/*********************
 * Operator precedence
 *********************/

var now, yearJohn, fullAge;
now = 2020;
yearJohn = 1997;
fullAge = 22;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
