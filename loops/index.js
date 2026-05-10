// 23
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

for (let i = 1; i <= 10; i++) {
  console.log("7 X ", i, "= ", 7 * i, " ");
}

//24
num = 1;
while (num % 6 != 0 || num % 8 != 0) {
  num++;
}
console.log(num);

//25
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FinBuzz", i);
  } else if (i % 3 == 0 && i % 5 != 0) {
    console.log("Fin ", i);
  } else console.log("Buzz");
}

//26
let rockets = 5;
while (rockets > 0) {
  console.log(rockets, "......");
  rockets--;
}
console.log("Blast off");

//27
for (let n = 2; n <= 50; n++) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(n);
  }
}

//28
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
