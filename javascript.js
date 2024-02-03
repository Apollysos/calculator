// Functions add, substract, multiply, devide

let input1;
let input2;
let result;
let inputValue;
let operator;
let resultAdd;
let resultDivision;
let resultMultiply;
let resultSubstract;
let operate;

let add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return (a / b).toFixed(2);
};

// input numbers

const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");

const num1 = document.querySelector(".num1");

const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num0 = document.querySelector(".num0");

// input operators

const btnAdd = document.querySelector(".add");
const btnSubstract = document.querySelector(".minus");
const btnMultiply = document.querySelector(".multiply");
const btnDivide = document.querySelector(".divide");

// other buttons: result, Reset

const btnResult = document.querySelector(".result");
let display = document.querySelector(".display");

const btnReset = document.querySelector(".reset");

const getNumber = function () {};

num7.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + 7);
    display.textContent += "7";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + 7);
    display.textContent += "7";
  }
});

num8.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "8");
    display.textContent += "8";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "8");
    display.textContent += "8";
  }
});

num9.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "9");
    display.textContent += "9";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "9");
    display.textContent += "9";
  }
});

num4.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "4");
    display.textContent += "4";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "4");
    display.textContent += "4";
  }
});

num5.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "5");
    display.textContent += "5";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "5");
    display.textContent += "5";
  }
});

num6.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "6");
    display.textContent += "6";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "6");
    display.textContent += "6";
  }
});

num1.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "1");
    display.textContent += "1";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "1");
    display.textContent += "1";
  }
});

num2.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "2");
    display.textContent += "2";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "2");
    display.textContent += "2";
  }
});

num3.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "3");
    display.textContent += "3";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "3");
    display.textContent += "3";
  }
});
num0.addEventListener("click", () => {
  if (operator === undefined) {
    input1 = Number((input1 === undefined ? "" : input1) + "0");
    display.textContent += "0";
  } else {
    input2 = Number((input2 === undefined ? "" : input2) + "0");
    display.textContent += "0";
  }
});

// Selecting operator:

btnMultiply.addEventListener("click", () => {
  operator = multiply;
  display.textContent += `   x  `;
});

btnDivide.addEventListener("click", () => {
  operator = divide;
  display.textContent += `   /  `;
});

btnAdd.addEventListener("click", () => {
  operator = add;
  display.textContent += `   +  `;
});

btnSubstract.addEventListener("click", () => {
  operator = substract;
  display.textContent += `   -  `;
});

operate = function () {
  if (operator === divide) {
    resultDivision = divide(input1, input2);
    display.textContent += ` = ${resultDivision}`;
    input1 = resultDivision;
    input2 = undefined;

    return resultDivision;
  } else if (operator === add) {
    resultAdd = Number(add(input1, input2));
    display.textContent += ` = ${resultAdd}`;
    input1 = resultAdd;
    input2 = undefined;

    return resultAdd;
  } else if (operator === substract) {
    resultSubstract = substract(input1, input2);
    display.textContent += ` = ${resultSubstract}`;
    input1 = resultSubstract;
    input2 = undefined;

    return resultSubstract;
  } else if (operator === multiply) {
    resultMultiply = multiply(input1, input2);
    display.textContent += ` = ${resultMultiply}`;
    input1 = resultMultiply;
    input2 = undefined;

    return resultMultiply;
  }
};

// operate(7, 7, divide);
btnResult.addEventListener("click", operate);

btnReset.addEventListener("click", function () {
  input1 = undefined;
  input2 = undefined;
  operator = undefined;
  display.textContent = "";
});
