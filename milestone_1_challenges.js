//funtion that take in two parameters and return the sum
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(20, 30)); //50

//code for Converting Minutes into Seconds
function convert(minutes) {
  return minutes * 60;
}
console.log(convert(5)); //300

// Perimeter of a Rectangle
function Rectangle(length, width) {
  return 2 * length + width;
}
console.log(Rectangle(20, 10)); //200

//Check Negative
function isNegative(number) {
  if (number < 0) {
    return "true";
  } else {
    return "false";
  }
}
console.log(isNegative(20));

//Can I Drive

function can_i_drive(age) {
  if (age >= 18) {
    console.log("Alice is old enough to drive");
  } else {
    console.log("alice is old enogh to drive");
  }
}
console.log(can_i_drive(20));

//findLargest
function largestNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3)
    console.log("num1 is the largest number " + num1);
  else if (num2 >= num1 && num2 >= num3) {
    console.log("num2 is the largest " + num2);
  } else {
    console.log("largest numer is " + num3);
  }
}c

console.log(largestNumber(20, 30, 89));

// BMI Calculator
function bmi_Calculator(weight, height) {
  return weight / (height * height);
  let bmi;
  if (bmi < 18.5) console.log("Underweight");
  else if (bmi >= 18.5 && bmi <= 24.5) console.log("Normal weight");
  else if (bmi >= 24.5 && bmi <= 29.5) console.log("Overweight");
  else if (bmi >= 30) console.log(obesse);
}
console.log(bmi_Calculator(89, 100));

function greet_user(name, hour) {
  if (hour >= 5 && hour <= 11) console.log("Good morning, " + name);
  else if (hour >= 12 && hour <= 17) console.log("Good afternoon, " + name);
  else if (hour >= 18 && hour <= 21) console.log("Good evening, Alice! " + name);
  else if ((hour >= 22)|| (hour >=0 && hour <= 4)) console.log("goodnight " + name);
  else {
    console.log("invalid hour");
  }
}
console.log(greet_user("alice",10));
//FizzBuzz
function FizzBuzzCheck(number) {
  if (number % 3 == 0) return "fizz";
  else if (number % 5 == 0) return "buzz";
  else if (number % 3 == 0 && number % 5 == 0) return "fizzbuzz";
}

console.log(FizzBuzzCheck(35));

//Perimeter 2
function Perimeter_2(number, letter) {
  switch (letter) {
    case "S":
      return 4 * number;
    case "c":
      return 6.18 * number;
    default:
      return "enter either c or s";
  }
}
console.log(Perimeter_2(6, "c"));

//Sum of Even Numbers
function sumEvenNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number; i += 2) {sum += i;
}return sum }
console.log(sumEvenNumbers(40));

//12. Multiply by Itself
function powerUp(num, times) {
  let power = num ** times;
  return power;
}
console.log(powerUp(3, 2));

//Factorial Calculator

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

//14.multiple of sum ,returns sum of all numbers
function sumMutiples(n, divisor) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % divisor == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMutiples(5, 3));

//15 .sum of digits
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumDigits(123));
