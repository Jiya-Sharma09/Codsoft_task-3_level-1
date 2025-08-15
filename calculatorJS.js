const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === '=') {
      try {
        // Evaluate the expression
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      if (resultDisplayed && !isNaN(value)) {
        // Start new input if number pressed after result
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
