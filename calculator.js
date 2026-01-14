document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let shouldResetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('clear')) {
                currentInput = '0';
                previousInput = '';
                operation = null;
                shouldResetDisplay = false;
            } else if (button.classList.contains('equal')) {
                if (operation && previousInput && currentInput !== '0') {
                    currentInput = String(eval(previousInput + operation + currentInput));
                    previousInput = '';
                    operation = null;
                    shouldResetDisplay = true;
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput !== '0') {
                    previousInput = currentInput;
                    operation = value;
                    shouldResetDisplay = true;
                }
            } else {
                if (shouldResetDisplay) {
                    currentInput = value;
                    shouldResetDisplay = false;
                } else {
                    currentInput = currentInput === '0' ? value : currentInput + value;
                }
            }

            display.textContent = currentInput;
        });
    });
});