//8

console.log(2 + 3 * 4); //14
console.log((2 + 3) * 4); //20
console.log(2 ** 3 * 2); //16
console.log((10 % 3) + 1); //2
console.log(5 + 3 > 7 && 4 !== 5); // true

//9
console.log(true && "hello"); //hello
console.log(false && "hello"); // false
console.log(0 || "default"); //default
console.log("value" || "default"); // value
console.log(null ?? "fallback"); // fallback

//10
let price = 120,
  quantity = 3,
  discountPercent = 10;
let subtotal = price * quantity;
let discount = (subtotal * discountPercent) / 100;
let final_total = subtotal - discount;
console.log(
  "subtotal:",
  subtotal,
  " | ",
  "discount:",
  discount,
  " | ",
  " total: ",
  final_total,
);

// 11
let num = 17;
if (num % 2 == 1) console.log(num, "is odd");
//12
let x = 1;
x += 5;
x *= 2;

x -= 3;
x **= 2;
x %= 7;
console.log(x);

// 13
let weight = 70,
  height = 1.75;
let bmi = weight / height ** 2;

console.log(
  "BMI: ",
  bmi.toFixed(),
  "for weight= ",
  weight,
  " height =",
  height,
);

//14
let isLoggedIn = true,
  isAdmin = false,
  age = 20;
if (isLoggedIn && age >= 18) console.log(true);
else console.log(false);

if (isAdmin && isAdmin) console.log(true);
else console.log(false);
if (isLoggedIn || age >= 21) console.log(true);
else console.log(false);
