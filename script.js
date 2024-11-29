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

// when button delete is clicked
document.getElementById("backspace").addEventListener("click", function () {
  let l = document.getElementById("input-display").value.length;
  document.getElementById("input-display").value = document
    .getElementById("input-display")
    .value.slice(0, l - 1);
});

let d;

// when button = is clicked
document.getElementById("equal").addEventListener("click", function () {
  if (dot() === false) {
    document.getElementById("error-msg").style.display = "block";

    document.getElementById("result").value = 0;
  }

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

  let sumOfIndexValuesOfOpenBrackets = 0;
  let sumOfIndexValuesOfCloseBrackets = 0;
  let countOfOpenBrackets = 0;
  let countOfCloseBrackets = 0;

  for (let i of document.getElementById("input-display").value) {
    if (i === "(") {
      countOfOpenBrackets++;
    } else if (i === ")") {
      countOfCloseBrackets++;
    }
  }

  if (countOfCloseBrackets !== countOfOpenBrackets) {
    document.getElementById("error-msg").style.display = "block";
    return;
  }

  for (let i of document.getElementById("input-display").value) {
    if (i === "(") {
      sumOfIndexValuesOfOpenBrackets += document
        .getElementById("input-display")
        .value.indexOf("(");
    } else if (i === ")") {
      sumOfIndexValuesOfCloseBrackets += document
        .getElementById("input-display")
        .value.indexOf(")");
    }
  }

  if (sumOfIndexValuesOfCloseBrackets < sumOfIndexValuesOfOpenBrackets) {
    document.getElementById("error-msg").style.display = "block";
    return;
  }

  let indexValueOfOpenBracket = 0;
  let indexValueOfCloseBracket = 0;
  let tempInput;
  let result;

  function inputProcessor() {
    if (dot()) {
      if (document.getElementById("input-display").value.indexOf("(") !== -1) {
        document.getElementById("input-display").value = document
          .getElementById("input-display")
          .value.replace(tempInput, String(result));
        someFunc();
      } else {
        document.getElementById("result").value = result;
      }
    } else {
      document.getElementById("result").value = 0;
    }
  }

  function someFunc() {
    for (
      i = 1;
      i < document.getElementById("input-display").value.length;
      i++
    ) {
      if (
        document.getElementById("input-display").value[i] === "(" &&
        document.getElementById("input-display").value[i - 1] !== "*" &&
        document.getElementById("input-display").value[i - 1] !== "/" &&
        document.getElementById("input-display").value[i - 1] !== "+" &&
        document.getElementById("input-display").value[i - 1] !== "-"
      ) {
        document.getElementById("input-display").value =
          document.getElementById("input-display").value.slice(0, i) +
          "*" +
          document.getElementById("input-display").value.slice(i);
      }
    }

    for (
      i = 0;
      i < document.getElementById("input-display").value.length;
      i++
    ) {
      if (document.getElementById("input-display").value[i] === ")") {
        indexValueOfCloseBracket = i;
        break;
      } else if (document.getElementById("input-display").value[i] === "(") {
        indexValueOfOpenBracket = i;
      }
    }

    tempInput = document
      .getElementById("input-display")
      .value.slice(indexValueOfOpenBracket, indexValueOfCloseBracket + 1);

    function calculate(somepara) {
      return (somepara = somepara.slice(1, somepara.length - 1));
    }

    let figuresOnly = calculate(tempInput);

    for (let k of document.getElementById("input-display").value) {
      if (k !== "(") {
        figuresOnly = document.getElementById("input-display").value;
      } else {
        figuresOnly = calculate(tempInput);
        break;
      }
    }

    let resultHolder = "";
    let resultHolder2;
    let concatVar = "";

    for (let i of figuresOnly) {
      if (
        i !== "+" &&
        i !== "-" &&
        i !== "*" &&
        i !== "/" &&
        i !== "(" &&
        i !== ")"
      ) {
        resultHolder += i;
      } else {
        break;
      }
    }

    for (let i of figuresOnly) {
      if (i === "*") {
        figuresOnly = figuresOnly.slice(figuresOnly.indexOf("*") + 1);
        for (let i of figuresOnly) {
          if (i === "+" || i === "-" || i === "*" || i === "/") {
            break;
          } else {
            concatVar += i;
          }
        }
        concatVar = Number(concatVar);

        if (resultHolder === "") {
          resultHolder2 *= concatVar;
        } else {
          resultHolder = Number(resultHolder);
          resultHolder2 = resultHolder * concatVar;
        }
        resultHolder = "";
        concatVar = "";
      } else if (i === "-") {
        figuresOnly = figuresOnly.slice(figuresOnly.indexOf("-") + 1);
        for (let i of figuresOnly) {
          if (i === "+" || i === "-" || i === "*" || i === "/") {
            break;
          } else {
            concatVar += i;
          }
        }
        concatVar = Number(concatVar);

        if (resultHolder === "" && resultHolder2 === undefined) {
          resultHolder2 = -concatVar;
        } else if (resultHolder === "") {
          resultHolder2 -= concatVar;
        } else {
          a = Number(resultHolder);
          resultHolder2 = resultHolder - concatVar;
        }
        resultHolder = "";
        concatVar = "";
      } else if (i === "+") {
        figuresOnly = figuresOnly.slice(figuresOnly.indexOf("+") + 1);
        for (let i of figuresOnly) {
          if (i === "+" || i === "-" || i === "*" || i === "/") {
            break;
          } else {
            concatVar += i;
          }
        }
        concatVar = Number(concatVar);

        if (resultHolder === "") {
          resultHolder2 += concatVar;
        } else {
          resultHolder = Number(resultHolder);
          resultHolder2 = resultHolder + concatVar;
        }
        resultHolder = "";
        concatVar = "";
      } else if (i === "/") {
        figuresOnly = figuresOnly.slice(figuresOnly.indexOf("/") + 1);
        for (let i of figuresOnly) {
          if (i === "+" || i === "-" || i === "*" || i === "/") {
            break;
          } else {
            concatVar += i;
          }
        }
        concatVar = Number(concatVar);

        if (resultHolder === "") {
          resultHolder2 /= concatVar;
        } else {
          resultHolder = Number(resultHolder);
          resultHolder2 = resultHolder / concatVar;
        }
        resultHolder = "";
        concatVar = "";
      }
    }

    if (resultHolder === "") {
      result = resultHolder2;
      inputProcessor();
    } else {
      result = resultHolder;
      inputProcessor();
    }
  }

  someFunc();

  document.getElementById("input-display").value = d;
});
