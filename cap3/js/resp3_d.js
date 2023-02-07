// d) Elaborar um programa que leia três lados e verique se eles podem ou não formar um triângulo. 
// Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois.
// Caso possam formar um triângulo, exiba também qual o tipo do triângulo: 
// Equilátero (3 lados iguais), 
// Isósceles (2 lados iguais) e 
// Escaleno (3 lados diferentes). 
// A Figura 3.10 exibe um exemplo de execução do exercício.

function verificarTriangulo(){
    let inLadoA = document.getElementById("inLadoA");
    let inLadoB = document.getElementById("inLadoB");
    let inLadoC = document.getElementById("inLadoC");

    let outResultado = document.getElementById("outResultado");
    let outTipo = document.getElementById("outTipo");

    let ladoA = Number(inLadoA.value);
    let ladoB = Number(inLadoB.value);
    let ladoC = Number(inLadoC.value);

    if(!ladoA || !ladoB || !ladoC){
        alert('Valores invalidos.');
        inLadoA.focus();
        return;
    }

    let resultado,tipoTriangulo;
    if(ladoA > ladoB+ladoC || ladoB > ladoA+ladoC || ladoC > ladoA+ladoB){
        resultado = ("Não Podemos ser um triangulo");
    }else{
        resultado = ("Os Lados formam um triangulo.");
        if(ladoA == ladoB && ladoA == ladoC){
            tipoTriangulo = "Equilátero";            
        }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
            tipoTriangulo = "Isósceles"; 
        }else{
            tipoTriangulo = "Escaleno"; 
        }
    }

    outResultado.textContent = resultado;
    outTipo.textContent = tipoTriangulo;
    
}
let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);