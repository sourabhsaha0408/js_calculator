const input = "1.1-2.5+3.8";
let a = "";
let b = 0;
let c=1;

for (let i of input) {
  if (i !== "+" && i !== "-") {
    a += i;
  } else if (i === "+") {
    a = Number(a);
    b = b + a;
    a = "";
  } else if (i === "-") {
    a = Number(a);
    b = b + a;
    a = "-";
  }
}
a = Number(a);
b = b + a;

console.log(b);

// let a = "*2";
// a = Number(a);
// console.log(a);
