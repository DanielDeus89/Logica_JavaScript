// a) Elaborar um programa que leia um número. Informe se ele é par ou
// ímpar. A Figura 3.7 ilustra a tela de execução do programa. Para os
// exercícios, foi utilizada uma 

function calcularPar(){
    let inNumero = document.getElementById("inNumero");
    let outSituacao = document.getElementById("outSituacao");

    let numero = Number(inNumero.value);
    if(!numero){
        alert("Informe um numero valido");
        inNumero.focus();
        return;
    }

    if(numero%2==0){
        outSituacao.textContent = `Resposta: ${numero} é Par`;
        outSituacao.style.color = `blue`;
    }else{
        outSituacao.textContent = `Resposta: ${numero} não Par`;
        outSituacao.style.color = `red`;

    }

}
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularPar);