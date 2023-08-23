const resultbox = document.getElementById("result");
const lastCalc = document.getElementById("lastCalc");
const historyCalculation = document.getElementById("history");
const clrHistory = document.getElementById("clearHistory");

let a;
let b;

let a2;
let b2;

let numberToAdd;
let operator;
let newOperator;
let op;
let history;
let isFirst = true;

let resultValue = "";

a = "";
b = "";

function init()
{
    clrHistory.style.display = "none";
}

function AddNumber(numberToAdd)
{
    if (isFirst)
    {
        a += numberToAdd;
        resultbox.innerText +=  " " +  numberToAdd;
    }
    else
    {
        b += numberToAdd;
        resultbox.innerText += " " +  numberToAdd;
    }
}

function Operator(operator)
{
    isFirst = false;

    switch(operator)
    {
        case "+":
            resultbox.innerText += " + ";
            newOperator = "+";
        break;

        case "-":
            resultbox.innerText += " - ";
            newOperator = "-";
        break;
        case "*":
            resultbox.innerText += " * ";
            newOperator = "*";
        break;
        case "/":
            resultbox.innerText += " / ";
            newOperator = "/";
        break;
        case "2^":
            resultbox.innerText += " 2^ ";
            newOperator = "2^";
        break;
    }
}

function Clear()
{
    resultbox.innerText = "";

    a = "";
    b = "";

    a2 = "";
    b2 = "";

    isFirst = true;
}

function LastCalculation(op)
{
    const calc = a2 + op + b2 + "=" + resultValue;

    lastCalc.innerText = calc;

    historyCalc(calc);
}

function historyCalc(history)
{
    const element = document.createElement("h3")
    element.innerText = history;

    historyCalculation.appendChild(element);
}

function clearHistory()
{
    historyCalculation.innerHTML = "";
    clrHistory.style.display = "none";
}

function ShowResult()
{
    const floor = Math.floor;

    a2 = floor(parseFloat(a));
    b2 = floor(parseFloat(b));

    switch (newOperator)
    {
        case "+":
            resultValue = a2 + b2
            LastCalculation(" + ");
        break;

        case "-":
            resultValue = a2 - b2
            LastCalculation(" - ");
        break;
        case "*":
            resultValue = a2 * b2
            LastCalculation(" * ");
        break;
        case "/":
            resultValue = a2 / b2
            LastCalculation(" / ");
        break;
        case "2^":
            resultValue = b2 ** a2
            LastCalculation(" 2^ ");
        break;
    }

    resultbox.innerText = resultValue;
    clrHistory.style.display = "block";

    a = resultValue.toString();
    b = "";
    isFirst = false;
}