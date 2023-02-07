function verificarPrimo(){
    let inNumero = document.getElementById("inNumero");

    let numero = Number(inNumero.value);

    if(!numero){
        alert("Valor invalido");
        inNumero.focus();
        return;
    }

    let temDivisor = 0;
    for(let i=2; i<=numero / 2; i++){
        if(numero % i == 0){
            temDivisor = 1;
            break;
            console.log(temDivisor);
        }
    }

    let resp = "";
    if(numero>1 && !temDivisor){
        resp = `${numero} É primo`;
    }else{
        resp = `${numero} Não é primo`;
    }

    document.getElementById("outPrimo").textContent = resp;

    inNumero.focus();

}
let btVerificar = document.getElementById("btVerificar").addEventListener("click", verificarPrimo);