function calculadora() {
    var operacao = Number(prompt('Escola a Operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/) \n 5 - Divisão Inteira(%) \n 6 - Potenciação(**)'));

    if (!operacao || operacao > 7) {
        alert('Operação Inválida!');
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o Primeiro Valor :'));
        let n2 = Number(prompt('Insira o Segundo Valor :'));
        let resultado;

        if (!n1 || !n2) {
            alert('Parametros Inválidos');
            calculadora();
        } else {

            validaOperacao();

            function soma() {
                resultado = n1 + n2;
                alert(n1 + ' + ' + n2 + ' = ' + resultado);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(n1 + ' - ' + n2 + ' = ' + resultado);
                novaOperacao();
            }

            function multiplicao() {
                resultado = n1 * n2;
                alert(n1 + ' * ' + n2 + ' = ' + resultado);
                novaOperacao();
            }

            function divisao() {
                resultado = n1 / n2;
                alert(n1 + ' * ' + n2 + ' = ' + resultado);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(n1 + ' % ' + n2 + ' = ' + resultado);
                novaOperacao();
            }

            function exponeciacao() {
                resultado = n1 ** n2;
                alert(n1 + ' ** ' + n2 + ' = ' + resultado);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = Number(prompt('Deseja fazer nova operacao? \n 1 - Sim \n 2 - Não'));
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até Mais');
                } else {
                    alert('Opção Invalida');
                    novaOperacao();
                }
            }

            function validaOperacao() {
                if (operacao == 1) {
                    soma();
                } else if (operacao == 2) {
                    subtracao();
                } else if (operacao == 3) {
                    multiplicao();
                } else if (operacao == 4) {
                    divisao();
                } else if (operacao == 5) {
                    divisaoInteira();
                } else if (operacao == 6) {
                    exponeciacao();
                }
            }
        }
    }
}

calculadora();