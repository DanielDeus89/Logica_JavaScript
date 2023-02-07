// b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano,
// após o primeiro ano. Elaborar um programa que leia o número inicial de
// chinchilas e anos e informe ano a ano o número médio previsto de chinchilas
// da fazenda. Validar a entrada para que o número inicial de chinchilas seja
// maior ou igual a 2 (um casal). A Figura 4.16 exibe a página com um exemplo
// de saída do programa.

function mostrarPrevisao(){
    let inAnimal = document.getElementById("inAnimal");
    let inAnos = document.getElementById("inAnos");

    let animal = Number(inAnimal.value);
    let ano = Number(inAnos.value);

    if(!animal || !ano || animal<2){
        alert("Valores invalidos");
        inAnimal.focus();
        return;
    }

    let resp = "";
    let total = animal;
    for(let i=1; i<=ano; i++){      
             
        resp+=`${i}º ano: ${total}\n`;  
        total *= 3;  
    }
    document.getElementById("outAnimais").textContent = resp;
}
let btMostrar = document.getElementById("btMostrar").addEventListener("click",mostrarPrevisao);