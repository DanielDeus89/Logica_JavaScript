function verificarPrimo(){
    let inNumero = document.getElementById("inNumero");

    let numero = Number(inNumero.value);

    if(!numero){
        alert("Valor invalido");
        inNumero.focus();
        return;
    }

    let numDivisores = 0;
    for(let i=1; i<=numero; i++){
        if(numero % i == 0){
            numDivisores++;
            // console.log(numDivisores);
        }
    }

    let resp = "";
    if(numDivisores==2){
        resp = `${numero} É primo`;
    }else{
        resp = `${numero} Não é primo`;
    }

    document.getElementById("outPrimo").textContent = resp;

    inNumero.focus();

}
let btVerificar = document.getElementById("btVerificar").addEventListener("click", verificarPrimo);