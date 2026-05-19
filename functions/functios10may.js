//29

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));

//30
isEven = (n) => {
  if (n % 2 == 0) return true;
  return false;
};

isOdd = (n) => {
  if (n % 2 == 1) return true;
  return false;
};
//31
function greet(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}
//32
function maxOfThree(a, b, c) {
  if (a >= b && a > c) {
    return a;
  } else if (b >= a && b > c) {
    return b;
  } else if (c >= a && c > b) {
    return c;
  } else return "Equals";
}

//33
function countVowels(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    )
      cnt++;
  }
  return cnt;
}
//34
factorial = (n) => {
  let sumN = 1;
  for (let i = 1; i <= n; i++) {
    sumN *= i;
  }
  return sumN;
};
console.log(factorial(7));

//35
function isPalindrome(str) {
  str = str.replaceAll(" ", "");

  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racecar"));
