let erros = [];
let sorteado = Math.floor(Math.random()*100)+1;

const CHANCES = 6;

function apostarNumero(){
    let inNumero = document.getElementById("inNumero");
    let numero = Number(inNumero.value);

    if(!numero || numero<=0 || numero > 100){
        alert("Informe um Número valido...");
        inNumero.focus();
        return;
    }

    if(numero == sorteado){
        
    }
}
let btApostar = document.getElementById("btApostar").addEventListener("click", apostarNumero);