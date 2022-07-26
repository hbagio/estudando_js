
function calculo() {

    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2"); 
    var resultado = document.getElementById("resultado");      
    var textoIguais;
    var textoEntreMaiorVinte;
    var textoMaiorDez;

    verificacao ();

    resultado.innerHTML = textoIguais +' Sua soma é ' + (Number(valor1.value) + Number(valor2.value))+ ', ' + textoMaiorDez + ', ' + textoEntreMaiorVinte;


    function verificacao() {        
        textoIguais = valor1.value == valor2.value ?  "Valor 1 e Valor 2 são Iguais! " : "Valor 1 e Valor 2 Não são Iguais !";

        textoMaiorDez = valor1.value + valor2.value > 10 ?  " é maior que 10 " : " é menor que 10 ";

        textoEntreMaiorVinte = valor1.value + valor2.value < 20 ?  " é menor 20 " : "  é maior que 20 ";

    }
}