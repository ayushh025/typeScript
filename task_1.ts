//Create a function that takes two numbers, 25 and 35, and returns their total sum.
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(25, 35));

//Define three variables num1, num2, and num3 with values of your choice and find their sum.
let num1: number = 22;
let num2: number = 12;
let num3: number = 16;
console.log("Sum of these numbers are", num1 + num2 + num3);

//Write a program to add 150 and 250 and store the result in a variable named grandTotal.
let n1: number = 150;
let n2: number = 250;
let grandTotal: number = n1 + n2;
console.log("Sum is", grandTotal);

//Create a logic to increase the value of a variable score from 80 to 90 using the + operator.
let score: number = 80;
score = score + 10;
console.log("Updated score is", score);

//Write a script to combine (add) 99 and 1 and print the result to the console.
let a: number = 99;
let b: number = 1;
let c: number = a + b;
console.log("Sum is", c);

//Write a function to subtract 45 from 100 and return the remaining value.
let n3: number = 100;
let n4: number = 45;
let n5: number = n3 - n4;
console.log("Remaining value after subtraction is", n5);

//Create a variable walletBalance with 500 and subtract an expense of 120 from it.
let walletBalance: number = 500;
let expense: number = 120;
console.log("Balance after expense:", walletBalance - expense);

//Find the difference between 2000 and 850 using TypeScript variables.
let n6: number = 2000;
let n7: number = 850;
console.log("Difference is", n6 - n7);

//Write code to decrease a variable stock by 5 units using the -= operator
let n8: number = 85;
n8 -= 5;
console.log("Value after decrease is", n8);

// Calculate how much more 150 is than 75 by using subtraction.
let n9: number = 150;
let n10: number = 75;
let difference: number = n9 - n10;

console.log("150 is", difference, "more than 75.");

// Write a function that accepts one number and returns that number multiplied by 10
function tenX(a: number): number {
  return a * 10;
}

console.log(tenX(25));

// Calculate the total price of 5 items if each item costs $15.
let price: number = 15;
let totalPrice: number = price * 5; //price of 5 items
console.log(`Total price of 5 items ${totalPrice} $`);

// Create a program to find the product of 12 and 12
let n11: number = 12;
console.log("Product of 12 and 12 is", n11 * n11);

// Write a script to calculate the area of a rectangle where length is 20 and width is 10.
let len: number = 20;
let wid: number = 10;
let area: number = len * wid;
console.log("Area of this rectangle is", area);

// Use a variable to triple the value of 30 and print the output.
let n12: number = 30 * 3;
console.log("Triple of 30 is", n12);

// Create a function to divide 100 by 4 and return the result.
function divideBy4(a: number): number {
  return a / 4;
}
console.log(divideBy4(100));

// Write a program to split 50 chocolates equally among 5 friends.
let chocolates: number = 50;
let friends: number = 5;
let chPerFrnd: number = chocolates / friends;

console.log(`Each friend will get ${chPerFrnd} chocolates`);

//Use TypeScript to find the half of 1500.
let n13: number = 1500;
console.log("Half of 1500 is", n13 / 2);

//Find the quotient when 81 is divided by 9.
let n14: number = 81;
console.log("Quotient when 81 is divided by 9 is", n14 / 9);

//Use the Modulus (%) operator to find the remainder when 10 is divided by 3.
let n15: number = 10;
console.log("Remainder when 10 is divided by 3 is", n15 % 3);