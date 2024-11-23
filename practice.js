let input = "2";
let a = "";
let b;
let c = "";
let d;

function needed() {
  a = "";
  for (let i of input) {
    if (
      i !== "+" &&
      i !== "-" &&
      i !== "*" &&
      i !== "/" &&
      i !== "(" &&
      i !== ")"
    ) {
      a += i;
    } else {
      break;
    }
  }
  console.log(input);
  console.log(a);
}

needed();

for (let i of input) {
  if (i === "*") {
    input = input.slice(input.indexOf("*") + 1);
    console.log(input);
    for (let i of input) {
      if (i === "(") {
        input = input.slice(input.indexOf("(") + 1);
        b = Number(a);
        console.log(input);
        needed();
      } else if (i === ")") {
        input = input.slice(input.indexOf(")") + 1);
        console.log(input);
        break;
      } else if (i === "+" || i === "-" || i === "*" || i === "/") {
        break;
      } else {
        c += i;
        console.log(c, "test2");
      }
    }
    c = Number(c);
    console.log(a, "test");
    if (a === "") {
      b *= c;
    } else {
      a = Number(a);
      b = a * c;
    }
    a = "";
    c = "";
  }
}

console.log(b,"rt");
