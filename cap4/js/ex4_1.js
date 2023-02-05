function mostrarTabuada(){
    let inNumero =  document.getElementById("inNumero");
    let outTabuada = document.getElementById("outTabuada");

    let numero = Number(inNumero.value);

    if(!numero){
        alert("Valor invalido. Informe um novo numero.");
        inNumero.focus();
        return;
    }

    var resposta = "";
    for (let i=1; i<=10; i++){
        resposta += `${numero} x ${i} = ${numero * i}\n`;
    }
    outTabuada.textContent = resposta;
}
let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarTabuada);