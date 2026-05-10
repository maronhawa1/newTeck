//15
let light = "yellow";

if (light == "yellow") {
  console.log("slow down");
} else if (light == "green") {
  console.log("Go!");
} else if (light == "red") {
  console.log("stop!");
} else {
  console.log("Unknown sign");
}

//16
let age = 25,
  isMember = true;
if (age >= 18 && isMember) {
  console.log("Full access — welcome member!");
} else if (age >= 18 && !isMember) {
  console.log("Guest access — consider joining");
} else if ((age < 18, isMember)) {
  console.log("Junior member access");
} else console.log("No access");

//17
let msg;
if (10 > 5) console.log("yes");
else console.log("no");
let fee;
if (isMember) fee = 5;
else fee = 20;
let label, score;
if (score >= 50) label = "pass";
else label = "fail";

//18
let mounth = 7;
if (mounth == 1 || mounth == 2 || mounth == 12) {
  console.log("winter");
} else if (mounth >= 3 && mounth <= 5) {
  console.log("spring");
} else if (mounth >= 6 && mounth <= 8) {
  console.log("summer");
} else if (mounth >= 9 && mounth <= 11) {
  console.log("automun");
} else console.log("Unknown month");

//19
let n = 15;
if (n % 3 == 0 && n % 5 == 0) {
  console.log("FizzBuzz for n=", n);
} else if (n % 3 == 0 && n % 5 != 0) {
  console.log("Fizz");
} else if (n % 3 != 0 && n % 5 == 0) {
  console.log("Buzz");
}

//20
let passwword = "Hello1!";
if (passwword.length < 6) {
  console.log("Weak!");
} else if (passwword.length >= 6 && passwword.length < 10) {
  console.log("Medium ", "(length is ", passwword.length, ")");
} else if (passwword.length >= 10) {
  console.log("Strong");
}

//21
const x = 5;
console.log(x > 3 && x < 10 ? "in range" : "out"); // in range
console.log(!!0); // false
console.log(!!"hello"); // true
console.log(x === 5 || x === 10 ? "match" : "no"); // match
