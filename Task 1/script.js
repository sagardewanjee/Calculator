const display = document.getElementById('display');

function appendNumber(number) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if ('+-*/%'.includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    const expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/');
    display.innerText = eval(expression.replace('%', '/100'));
  } catch {
    display.innerText = 'Error';
  }
}
