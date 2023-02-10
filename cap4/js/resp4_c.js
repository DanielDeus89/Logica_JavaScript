// c) Elaborar um programa que leia um número e verique se ele é ou não
// perfeito. Um número dito perfeito é aquele que é igual à soma dos seus
// divisores inteiros (exceto o próprio número). O programa deve exibir os
// divisores do número e a soma deles. A Figura 4.17 exibe a página do
// programa com um exemplo de número perfeito

function verificarPerfeito(){
    let inNumero = document.getElementById("inNumero");

    let numero = Number (inNumero.value);

    if(isNaN(numero) || numero <= 0){
        alert("Insira um valor valido");
        return;
    }

    let divisores = "";
    let soma = 0;
    for(let i=1; i<=numero/2; i++){
        if(numero % i == 0){
            divisores += `${i}, `;
            soma += i;
        }       
    }

    let msg = "";
    if(soma === numero){
        msg = `${numero} É um Número Perfeito`;
    }else{
        msg = `${numero} Não é um Número Perfeito`;

    }
    document.getElementById("outDivisores").textContent = `Divisores de ${numero}: ${divisores} (Soma: ${soma})`;
    document.getElementById("outResultado").textContent = `${msg}`;
}
let btVerificar = document.getElementById("btVerificar").addEventListener("click",verificarPerfeito);