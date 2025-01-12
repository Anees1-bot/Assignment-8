// 1. Write a js program to find maximum between two numbers.

// var a = prompt("Enter first number:");
// let b = prompt("Enter second number:");
// if (a > b) {
//     alert(a + " is Maximum ");
// } else if (a < b) {
//     alert(b + " is Maximum ");
// } else if (a = b) {
//     alert(a + " and " + b + " are equal");
// } else {
//     alert("not valid");
// }

// 2. Write a js program to find maximum between three numbers.

// var a = prompt("Enter first number:");
// var b = prompt("Enter second number:");
// var c = prompt("Enter third number:");
// if (a > b && a > c) {
//     alert(a + " is Maximum ");
// } else if (b > a && b > c) {
//     alert(b + " is Maximum ");
// } else if (c > a && c > b) {
//     alert(c + " is Maximum ");
// }
// else if (a = b = c) {
//     alert(a + "," + + b + " and " + c + " are equal");
// } else {
//     alert("invalid");
// }

// 3. Write a js program to check whether a number is negative, positive or zero.

// var a = prompt("Enter a number");
// if (a > 0) {
//     console.log("Positive");
// } else if (a < 0) {
//     console.log("Negative");
// } else if (a == 0) {
//     console.log("Zero");
// } else {
//     console.log("Not a number");
// }

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// var a = prompt("Enter a number");
// if (a % 5 == 0) {
//     console.log("Number is divisible by 5");
// } else if (a % 11 == 0) {
//     console.log("Number is divisible by 11");
// } else if (a % 5 != 0 && a % 11 != 0) {
//     console.log("Number is not divisible by 5 or 11");
// }

// 5. Write a js program to check whether a number is even or odd.

// var a = prompt("Enter a number");
// if (a % 2 == 0) {
//     console.log("The number entered is " + a + " and Number is even");
// } else if (a % 2 != 0) {
//     console.log("The number entered is " + a + " and Number is odd");
// } else {
//     console.log( "enter a number.");
// }

// 6. Write a js program to check whether a year is leap year or not.

// var year = prompt("Enter a year:");
// if (year % 4 == 0) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

// 7. Write a js program to check whether a character is alphabet or not.
// function isAlphabet(char) {
//     return /^[A-Za-z]$/.test(char);
// }
// let Input = prompt("Enter a character:");
// if (isAlphabet(Input)) {
//     console.log(`${Input} is an alphabet.`);
// } else {
//     console.log(`${Input} is not an alphabet.`);
// }

// // 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// var a = prompt("Enter an alphabet: ");
// if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
//     alert("Vowel");
// } else {
//     alert("NOt a vowel");
// }

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// function checkCharacterType(char) {
//     if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
//         return "Alphabet";
//     } else if (char >= '0' && char <= '9') {
//         return "Digit";
//     } else {
//         return "Special Character";
//     }
// }

// // Taking input from the user
// let userInput = prompt("Enter a character:");

// // Checking the length of input
// if (userInput.length === 1) {
//     let result = checkCharacterType(userInput);
//     console.log(`The character '${userInput}' is a ${result}.`);
// } else {
//     console.log("Please enter a single character.");
// }

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// function checkCharacterType(character) {
//     if (character >= 'A' && character <= 'Z') {
//         return 'uppercase';
//     } else if (character >= 'a' && character <= 'z') {
//         return 'lowercase';
//     }
// }

// let character = prompt('Enter a character: ');
// if (checkCharacterType(character) === 'uppercase') {
//     console.log('The character is uppercase');
// } else {
//     console.log('The character is lowercase');
// }

// 11. Write a js program to input week number and print week day.

// var week = prompt("Enter the day of the week");
// if (week == 1) {
//     console.log("Today is Monday");
// } else if (week == 2) {
//     console.log("Today is Tuesday");
// } else if (week == 3) {
//     console.log("Today is Wednesday");
// } else if (week == 4) {
//     console.log("Today is Thursday");
// } else if (week == 5) {
//     console.log("Today is Friday");
// } else if (week == 6) {
//     console.log("Today is Saturday");
// } else if (week == 7) {
//     console.log("Today is Sunday");
// } else {
//     console.log("Enter a day from 1 to 7");
// }

// 12. Write a js program to input month number and print number of days in that month.

// var month = prompt("Enter a month");
// if (month == 1) {
//     alert("January has 31 days");
// } else if (month == 2) {
//     alert("February has 28 days");
// } else if (month == 3) {
//     alert("March has 31 days");
// } else if (month == 4) {
//     alert("April has 30 days");
// } else if (month == 5) {
//     alert("May has 31 days");
// } else if (month == 6) {
//     alert("June has 30 days");
// } else if (month == 7) {
//     alert("July has 31 days");
// } else if (month == 8) {
//     alert("August has 31 days");
// } else if (month == 9) {
//     alert("September has 30 days");
// } else if (month == 10) {
//     alert("October has 31 days");
// } else if (month == 11) {
//     alert("November has 30 days");
// } else if (month == 12) {
//     alert("December has 31 days");
// } else {
//     alert("Enter month between 1 to 12");
// }

// 13. Write a js program to count total number of notes in given amount.

// function countNotes(price) {
//     let notes = [5000, 1000, 500, 100, 50, 20, 10];
//     let noteCounter = Array(7).fill(0);

//     for (let i = 0; i < notes.length; i++) {
//         if (price >= notes[i]) {
//             noteCounter[i] = Math.floor(price / notes[i]);
//             price = price - noteCounter[i] * notes[i];
//         }
//     }

//     console.log("Currency Count:");
//     for (let i = 0; i < notes.length; i++) {
//         if (noteCounter[i] != 0) {
//             console.log(notes[i] + " : " + noteCounter[i]);
//         }
//     }
// }
// let price = parseInt(prompt("Enter the price: "));
// countNotes(price);

// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

// let a = prompt("Enter first angle");
// let b = prompt("Enter second angle");
// let c = prompt("Enter third angle");
// if (a + b + c == 180) {
//     console.log("Triangle is valid");
// } else {
//     console.log("Triangle is not valid");
// }

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// var a = parseFloat(prompt("Enter first side"));
// var b = parseFloat(prompt("Enter second side"));
// var c = parseFloat(prompt("Enter third side"));

// if (a + b > c && a + c > b && b + c > a) {
//     console.log("Triangle is valid");
// } else {
//     console.log("Triangle is not valid");
// }

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// function checkTriangleType(a, b, c) {
//     if (a <= 0 || b <= 0 || c <= 0) {
//         return "Invalid side lengths";
//     }

//     if (a + b <= c || a + c <= b || b + c <= a) {
//         return "Not a triangle";
//     }

//     if (a === b && b === c) {
//         return "Equilateral triangle";
//     } else if (a === b || b === c || a === c) {
//         return "Isosceles triangle";
//     } else {
//         return "Scalene triangle";
//     }
// }
// const side1 = parseFloat(prompt("Enter the length of the first side:"));
// const side2 = parseFloat(prompt("Enter the length of the second side:"));
// const side3 = parseFloat(prompt("Enter the length of the third side:"));

// console.log(checkTriangleType(side1, side2, side3));

// 17. Write a js program to find all roots of a quadratic equation.

// function findRoots(a, b, c) {
//     let discriminant = b * b - 4 * a * c;
//     let root1, root2;
//     if (discriminant > 0) {
//         root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         console.log(`The roots are real and different. Root1: ${root1}, Root2: ${root2}`);
//     }
//     else if (discriminant === 0) {
//         root1 = root2 = -b / (2 * a);
//         console.log(`The roots are real and the same. Root1 = Root2: ${root1}`);
//     }
//     else {
//         let realPart = (-b / (2 * a)).toFixed(2);
//         let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//         console.log(`The roots are complex and different. Root1: ${realPart} + ${imaginaryPart}i, Root2: ${realPart} - ${imaginaryPart}i`);
//     }
// }

// const a = parseFloat(prompt("Enter the coefficient a: "));
// const b = parseFloat(prompt("Enter the coefficient b: "));
// const c = parseFloat(prompt("Enter the coefficient c: "));
// findRoots(a, b, c);

// 18. Write a js program to calculate profit or loss.

// function calculateProfitOrLoss(costPrice, sellingPrice) {
//     if (sellingPrice > costPrice) {
//         return `Profit: ${sellingPrice - costPrice}`;
//     } else if (sellingPrice < costPrice) {
//         return `Loss: ${costPrice - sellingPrice}`;
//     } else {
//         return 'No Profit No Loss';
//     }
// }
// const costPrice = parseFloat(prompt("Enter the cost price: "));
// const sellingPrice = parseFloat(prompt("Enter the selling price: "));

// const result = calculateProfitOrLoss(costPrice, sellingPrice);
// alert(result);



// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


// function calculateGrade() {
//     let physics = parseFloat(prompt("Enter marks for Physics: "));
//     let chemistry = parseFloat(prompt("Enter marks for Chemistry: "));
//     let biology = parseFloat(prompt("Enter marks for Biology: "));
//     let mathematics = parseFloat(prompt("Enter marks for Mathematics: "));
//     let computer = parseFloat(prompt("Enter marks for Computer: "));
//     let totalMarks = physics + chemistry + biology + mathematics + computer;
//     let percentage = (totalMarks / 500) * 100;


//     let grade;
//     if (percentage >= 90) {
//         grade = 'A';
//     } else if (percentage >= 80) {
//         grade = 'B';
//     } else if (percentage >= 70) {
//         grade = 'C';
//     } else if (percentage >= 60) {
//         grade = 'D';
//     } else if (percentage >= 40) {
//         grade = 'E';
//     } else {
//         grade = 'F';
//     }

//     alert("Percentage: " + percentage.toFixed(2) + "%\nGrade: " + grade);
// }
// calculateGrade();

// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%


// function calculateGrossSalary(basicSalary) {
//     let hra, da;

//     if (basicSalary <= 10000) {
//         hra = basicSalary * 0.20;
//         da = basicSalary * 0.80;
//     } else if (basicSalary <= 20000) {
//         hra = basicSalary * 0.25;
//         da = basicSalary * 0.90;
//     } else {
//         hra = basicSalary * 0.30;
//         da = basicSalary * 0.95;
//     }

//     const grossSalary = basicSalary + hra + da;
//     return grossSalary;
// }
// const basicSalary = parseFloat(prompt("Enter the basic salary of the employee:"));
// const grossSalary = calculateGrossSalary(basicSalary);
// console.log(`The Gross Salary is: ${grossSalary}`);


// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


// function calculateElectricityBill(units) {
//     let bill = 0;

//     if (units <= 50) {
//         bill = units * 0.50;
//     } else if (units <= 150) {
//         bill = (50 * 0.50) + ((units - 50) * 0.75);
//     } else if (units <= 250) {
//         bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
//     } else {
//         bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
//     }

//     let surcharge = bill * 0.20;
//     let totalBill = bill + surcharge;

//     return totalBill;
// }
// let units = prompt("Enter the number of units:");
// let totalBill = calculateElectricityBill(Number(units));
// console.log("Total Electricity Bill: Rs. " + totalBill.toFixed(2));
