document.getElementById("input-display").value = 0;

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

document.getElementById("decimal").addEventListener("click", function () {
  if (dot()) {
    document.getElementById("input-display").value +=
      document.getElementById("decimal").innerText;
  }
});

document.getElementById("btn1").addEventListener("click", function () {
  insertClickedDigit("btn1");
});

document.getElementById("btn2").addEventListener("click", function () {
  insertClickedDigit("btn2");
});

document.getElementById("btn3").addEventListener("click", function () {
  insertClickedDigit("btn3");
});

document.getElementById("btn4").addEventListener("click", function () {
  insertClickedDigit("btn4");
});

document.getElementById("btn5").addEventListener("click", function () {
  insertClickedDigit("btn5");
});

document.getElementById("btn6").addEventListener("click", function () {
  insertClickedDigit("btn6");
});

document.getElementById("btn7").addEventListener("click", function () {
  insertClickedDigit("btn7");
});

document.getElementById("btn8").addEventListener("click", function () {
  insertClickedDigit("btn8");
});

document.getElementById("btn9").addEventListener("click", function () {
  insertClickedDigit("btn9");
});

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

document.getElementById("plus").addEventListener("click", function () {
  insertClickedOperator("plus");
});

document.getElementById("multiply").addEventListener("click", function () {
  insertClickedOperator("multiply");
});

document.getElementById("divide").addEventListener("click", function () {
  insertClickedOperator("divide");
});

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

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("input-display").value = 0;

  document.getElementById("result").value = 0;
});

let a = "";
let b = 0;

document.getElementById("equal").addEventListener("click", function () {
  for (let i of document.getElementById("input-display").value) {
    if (i !== "+" && i !== "-" && i !== "*" && i !== "/") {
      a += i;
    } else if (i === "+") {
      a = Number(a);
      b += a;
      a = "";
    }
  }
  a = Number(a);
  b += a;
  document.getElementById("result").value = b;
});
