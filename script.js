// input display when app is opened
document.getElementById("input-display").value = 0;

// logic for handling decimal values
function dot() {
  let l = document.getElementById("input-display").value.length;
  if (
    document.getElementById("input-display").value[l - 1] === "*" ||
    document.getElementById("input-display").value[l - 1] === "-" ||
    document.getElementById("input-display").value[l - 1] === "+" ||
    document.getElementById("input-display").value[l - 1] === "/" ||
    document.getElementById("input-display").value[l - 1] === "."
  ) {
    return false;
  }

  for (i = l - 2; i >= 0; i--) {
    if (
      document.getElementById("input-display").value[i] === "*" ||
      document.getElementById("input-display").value[i] === "-" ||
      document.getElementById("input-display").value[i] === "+" ||
      document.getElementById("input-display").value[i] === "/"
    ) {
      return true;
    } else if (document.getElementById("input-display").value[i] === ".") {
      return false;
    }
  }
  return true;
}

// logic for handling digits values
function insertClickedDigit(digit) {
  if (
    document.getElementById("input-display").value ===
    document.getElementById("btn0").innerText
  ) {
    document.getElementById("input-display").value =
      document.getElementById(digit).innerText;
  } else {
    document.getElementById("input-display").value +=
      document.getElementById(digit).innerText;
  }
}

// logic for handling operators excluding "-" operator
function insertClickedOperator(symbol) {
  let l = document.getElementById("input-display").value.length;
  if (
    document.getElementById("input-display").value ===
    document.getElementById("btn0").innerText
  ) {
    document.getElementById("input-display").value =
      document.getElementById("btn0").innerText;
  } else if (
    document.getElementById("input-display").value[l - 1] === "+" ||
    document.getElementById("input-display").value[l - 1] === "-" ||
    document.getElementById("input-display").value[l - 1] === "*" ||
    document.getElementById("input-display").value[l - 1] === "/"
  ) {
    document.getElementById("input-display").value =
      document.getElementById("input-display").value.slice(0, l - 1) +
      document.getElementById(symbol).innerText;
  } else if (document.getElementById("input-display").value[l - 1] === ".") {
    document.getElementById("input-display").value =
      document.getElementById("input-display").value.slice(0, l - 1) +
      document.getElementById(symbol).innerText;
  } else {
    document.getElementById("input-display").value +=
      document.getElementById(symbol).innerText;
  }
}

// when button . is clicked
document.getElementById("decimal").addEventListener("click", function () {
  if (dot()) {
    document.getElementById("input-display").value +=
      document.getElementById("decimal").innerText;
  }
});

// when button ( is clicked
document.getElementById("openBracket").addEventListener("click", function () {
  insertClickedDigit("openBracket");
});

// when button ) is clicked
document.getElementById("closeBracket").addEventListener("click", function () {
  insertClickedDigit("closeBracket");
});

// when button 1 is clicked
document.getElementById("btn1").addEventListener("click", function () {
  insertClickedDigit("btn1");
});

// when button 2 is clicked
document.getElementById("btn2").addEventListener("click", function () {
  insertClickedDigit("btn2");
});

// when button 3 is clicked
document.getElementById("btn3").addEventListener("click", function () {
  insertClickedDigit("btn3");
});

// when button 4 is clicked
document.getElementById("btn4").addEventListener("click", function () {
  insertClickedDigit("btn4");
});

// when button 5 is clicked
document.getElementById("btn5").addEventListener("click", function () {
  insertClickedDigit("btn5");
});

// when button 6 is clicked
document.getElementById("btn6").addEventListener("click", function () {
  insertClickedDigit("btn6");
});

// when button 7 is clicked
document.getElementById("btn7").addEventListener("click", function () {
  insertClickedDigit("btn7");
});

// when button 8 is clicked
document.getElementById("btn8").addEventListener("click", function () {
  insertClickedDigit("btn8");
});

// when button 9 is clicked
document.getElementById("btn9").addEventListener("click", function () {
  insertClickedDigit("btn9");
});

// when button 0 is clicked
document.getElementById("btn0").addEventListener("click", function () {
  let l = document.getElementById("input-display").value.length;
  if (
    document.getElementById("input-display").value[l - 1] === "+" ||
    document.getElementById("input-display").value[l - 1] === "-" ||
    document.getElementById("input-display").value[l - 1] === "-" ||
    document.getElementById("input-display").value[l - 1] === "*"
  ) {
    document.getElementById("input-display").value +=
      document.getElementById("btn0").innerText +
      document.getElementById("decimal").innerText;
  } else {
    insertClickedDigit("btn0");
  }
});

// when button + is clicked
document.getElementById("plus").addEventListener("click", function () {
  insertClickedOperator("plus");
});

// when button * is clicked
document.getElementById("multiply").addEventListener("click", function () {
  insertClickedOperator("multiply");
});

// when button / is clicked
document.getElementById("divide").addEventListener("click", function () {
  insertClickedOperator("divide");
});

// when button - is clicked
document.getElementById("minus").addEventListener("click", function () {
  let l = document.getElementById("input-display").value.length;
  if (
    document.getElementById("input-display").value ===
    document.getElementById("btn0").innerText
  ) {
    document.getElementById("input-display").value =
      document.getElementById("minus").innerText;
  } else if (
    document.getElementById("input-display").value[l - 1] === "+" ||
    document.getElementById("input-display").value[l - 1] === "-" ||
    document.getElementById("input-display").value[l - 1] === "*" ||
    document.getElementById("input-display").value[l - 1] === "/"
  ) {
    document.getElementById("input-display").value =
      document.getElementById("input-display").value.slice(0, l - 1) +
      document.getElementById("minus").innerText;
  } else if (document.getElementById("input-display").value[l - 1] === ".") {
    document.getElementById("input-display").value =
      document.getElementById("input-display").value.slice(0, l - 1) +
      document.getElementById("minus").innerText;
  } else {
    document.getElementById("input-display").value +=
      document.getElementById("minus").innerText;
  }
});

// when button C is clicked
document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("input-display").value = 0;

  document.getElementById("result").value = 0;
  document.getElementById("error-msg").style.display = "none";
});

let a = "";
let b;
let c = "";
let d;

// when button = is clicked
document.getElementById("equal").addEventListener("click", function () {
  let l = document.getElementById("input-display").value.length;
  if (
    document.getElementById("input-display").value[l - 1] === "+" ||
    document.getElementById("input-display").value[l - 1] === "-" ||
    document.getElementById("input-display").value[l - 1] === "*" ||
    document.getElementById("input-display").value[l - 1] === "/"
  ) {
    document.getElementById("input-display").value = document
      .getElementById("input-display")
      .value.slice(0, l - 1);
  }

  d = document.getElementById("input-display").value;

  for (let k of document.getElementById("input-display").value) {
    if (
      k !== "0" &&
      k !== "1" &&
      k !== "2" &&
      k !== "3" &&
      k !== "4" &&
      k !== "5" &&
      k !== "6" &&
      k !== "7" &&
      k !== "8" &&
      k !== "9" &&
      k !== "." &&
      k !== "+" &&
      k !== "-" &&
      k !== "*" &&
      k !== "/" &&
      k !== "(" &&
      k !== " " &&
      k !== ")"
    ) {
      document.getElementById("error-msg").style.display = "block";
      return;
    }
  }

  for (let i of document.getElementById("input-display").value) {
    if (
      i !== "+" &&
      i !== "-" &&
      i !== "*" &&
      i !== "/" &&
      i !== "(" &&
      i !== ")"
    ) {
      a += i;
    } else if (i === "(") {
      document.getElementById("input-display").value = document
        .getElementById("input-display")
        .value.slice(
          document.getElementById("input-display").value.indexOf("(") + 1
        );
    } else {
      break;
    }
  }

  for (let i of document.getElementById("input-display").value) {
    if (i === "*") {
      document.getElementById("input-display").value = document
        .getElementById("input-display")
        .value.slice(
          document.getElementById("input-display").value.indexOf("*") + 1
        );
      for (let i of document.getElementById("input-display").value) {
        if (i === ")") {
          document.getElementById("input-display").value = document
            .getElementById("input-display")
            .value.slice(
              document.getElementById("input-display").value.indexOf(")") + 1
            );
          break;
        } else if (i === "+" || i === "-" || i === "*" || i === "/") {
          break;
        } else {
          c += i;
        }
      }
      c = Number(c);

      if (a === "") {
        b *= c;
      } else {
        a = Number(a);
        b = a * c;
      }
      a = "";
      c = "";
    } else if (i === "-") {
      document.getElementById("input-display").value = document
        .getElementById("input-display")
        .value.slice(
          document.getElementById("input-display").value.indexOf("-") + 1
        );
      for (let i of document.getElementById("input-display").value) {
        if (i === "+" || i === "-" || i === "*" || i === "/") {
          break;
        } else {
          c += i;
        }
      }
      c = Number(c);

      if (a === "" && b === undefined) {
        b = -c;
      } else if (a === "") {
        b -= c;
      } else {
        a = Number(a);
        b = a - c;
      }
      a = "";
      c = "";
    } else if (i === "+") {
      document.getElementById("input-display").value = document
        .getElementById("input-display")
        .value.slice(
          document.getElementById("input-display").value.indexOf("+") + 1
        );
      for (let i of document.getElementById("input-display").value) {
        if (i === "+" || i === "-" || i === "*" || i === "/") {
          break;
        } else {
          c += i;
        }
      }
      c = Number(c);

      if (a === "") {
        b += c;
      } else {
        a = Number(a);
        b = a + c;
      }
      a = "";
      c = "";
    } else if (i === "/") {
      document.getElementById("input-display").value = document
        .getElementById("input-display")
        .value.slice(
          document.getElementById("input-display").value.indexOf("/") + 1
        );
      for (let i of document.getElementById("input-display").value) {
        if (i === "+" || i === "-" || i === "*" || i === "/") {
          break;
        } else {
          c += i;
        }
      }
      c = Number(c);

      if (a === "") {
        b /= c;
      } else {
        a = Number(a);
        b = a / c;
      }
      a = "";
      c = "";
    }
  }

  if (a === "") {
    document.getElementById("result").value = b;
  } else {
    document.getElementById("result").value = a;
  }

  document.getElementById("input-display").value = d;

  a = "";
  b = undefined;
  c = "";
});
