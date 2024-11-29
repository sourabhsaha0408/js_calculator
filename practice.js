let input = "1+(2*3(5*5))-2(2/3)";
let indexValueOfOpenBracket = 0;
let indexValueOfCloseBracket = 0;
let tempInput;
let result;

function inputProcessor() {
  if (input.indexOf("(") !== -1) {
    input = input.replace(tempInput, String(result));
    someFunc();
  } else {
    console.log(result);
  }
}

function someFunc() {
  for (i = 1; i < input.length; i++) {
    if (
      input[i] === "(" &&
      input[i - 1] !== "*" &&
      input[i - 1] !== "/" &&
      input[i - 1] !== "+" &&
      input[i - 1] !== "-"
    ) {
      input = input.slice(0, i) + "*" + input.slice(i);
    }
  }

  console.log(input, "test3");

  for (i = 0; i < input.length; i++) {
    if (input[i] === ")") {
      indexValueOfCloseBracket = i;
      break;
    } else if (input[i] === "(") {
      indexValueOfOpenBracket = i;
    }
  }

  console.log(indexValueOfOpenBracket);
  console.log(indexValueOfCloseBracket);

  tempInput = input.slice(
    indexValueOfOpenBracket,
    indexValueOfCloseBracket + 1
  );

  console.log(tempInput, "test2");

  function calculate(somepara) {
    return (somepara = somepara.slice(1, somepara.length - 1));
  }

  let figuresOnly = calculate(tempInput);

  for (let k of input) {
    if (k !== "(") {
      figuresOnly = input;
    } else {
      figuresOnly = calculate(tempInput);
      break;
    }
  }
  console.log(figuresOnly, "test");

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

  someFunc();
}
