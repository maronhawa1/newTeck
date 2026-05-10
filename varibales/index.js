//1
console.log(typeof 42);
console.log(typeof "42");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});

//2 console.log(typeof 42);
const firstName = "Sara"; // the name of var must to begging with char not number
let my_age = 22; // invalid variable name
let score = 0;
score = 100; // Assignment to constant variable
let bad = "bad"; // reserved keyword

//3
const stuName = "Sara";
let age = 20;
let grade = "B";
isPassed = true;
console.log(
  "Student ",
  stuName,
  " age ",
  age,
  " got grade ",
  grade,
  "Passed ",
  isPassed,
);

//4
const msg = "I love javascript programming";
console.log(msg.length);
console.log(msg.toUpperCase());
console.log(msg.substring(7, 17));
console.log(msg.includes("love"));

//5
console.log(0 == false); //true
console.log(0 === false); // false
console.log("1" == 1); // true
console.log("1" === 1); // false
console.log("" == false); //true
console.log(null == undefined); //true
console.log(null === undefined); // false

//6
let a = 10,
  b = 5;
[a, b] = [b, a];
console.log(a, b);
