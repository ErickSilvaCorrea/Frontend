document.addEventListener('DOMContentLoaded', function () {
    // Aguarda o carregamento completo do DOM antes de executar o código

    // Obtém o elemento de exibição (visor) e os botões
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    // Adiciona um eventListener a cada botão
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Obtém o texto do botão clicado
            const buttonText = button.textContent;

            // Executa ação com base no texto do botão
            switch (buttonText) {
                case 'C':
                    clearDisplay();
                    break;
                case '=':
                    calculateResult();
                    break;
                default:
                    if (isOperator(buttonText) || buttonText === '.') {
                        appendOperator(buttonText);
                    } else {
                        appendNumber(buttonText);
                    }
            }
        });
    });

    // Função para verificar se um valor é um operador
    function isOperator(value) {
        return ['+', '-', '*', '/', '%', '√'].includes(value);
    }

    // Função para limpar o visor
    function clearDisplay() {
        displayValue = '';
        updateDisplay();
    }

    // Função para adicionar número ao visor
    function appendNumber(number) {
        displayValue += number;
        updateDisplay();
    }

    // Função para adicionar operador ao visor
    function appendOperator(operator) {
        displayValue += ` ${operator} `;
        updateDisplay();
    }

    // Função para adicionar ponto decimal ao visor
    function appendDecimal() {
        if (!displayValue.includes('.')) {
            displayValue += '.';
            updateDisplay();
        }
    }

    // Função para atualizar o visor com o valor atual
    function updateDisplay() {
        display.value = displayValue;
    }

    // Função para calcular o resultado da expressão no visor
    function calculateResult() {
        try {
            displayValue = eval(displayValue);
            updateDisplay();
        } catch (error) {
            displayValue = 'Erro';
            updateDisplay();
        }
    }
});
