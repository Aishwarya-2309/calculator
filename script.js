// Selecting elements
const display = document.getElementById('display');
const clearBtn = document.getElementById('ac');
const equalBtn = document.getElementById('equal');
const squareBtn = document.getElementById('square');
const moduloBtn = document.getElementById('modulo');
const numberBtns = document.querySelectorAll('[data-num]');
const operatorBtns = document.querySelectorAll('[data-operator]');

// Initialize an empty string expression
let expression = '';

// Append numbers when clicked
numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        expression += btn.getAttribute('data-num');
        display.value = expression;
    });
});

// Append operators
operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        expression += btn.getAttribute('data-operator');
        display.value = expression;
    });
});

// Modulo operation
moduloBtn.addEventListener('click', () => {
    expression += '%';
    display.value = expression;
});

// Clear display
clearBtn.addEventListener('click', () => {
    expression = '';
    display.value = '';
});

// Square a number
squareBtn.addEventListener('click', () => {
    if (expression) {
        try {
            let num = eval(expression);
            expression = Math.pow(num, 2).toString();
            display.value = expression;
        } catch {
            display.value = 'Error';
            expression = '';
        }
    }
});

// Calculate result
equalBtn.addEventListener('click', () => {
    try {
        expression = eval(expression).toString();
        display.value = expression;
    } catch {
        display.value = 'Error';
        expression = '';
    }
});
