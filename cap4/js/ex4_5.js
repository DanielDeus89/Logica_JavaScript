let numContas = 0;
let valTotal = 0;
let resposta = "";

function registrarConta(){
    let inConta = document.getElementById("inConta");
    let inValor = document.getElementById("inValor");
    let outListaContas = document.getElementById("outListaContas");
    let outTotal = document.getElementById("outTotal");

    let conta = inConta.value;
    let valor = Number(inValor.value);

    if(!conta){
        alert("Descrição da Conta invalido.");
        inConta.focus();
        return;
    }

    if(!valor){
        alert("Insira um valor valido")
        inValor.focus();
        return;
    }

    numContas++;
    valTotal += valor;

    resposta += `${conta} - R$ ${valor.toFixed(2)}\n`;

    outListaContas.textContent = `${resposta}------------------------------------`;
    outTotal.textContent = `${numContas} Conta(s) Total R$: ${valTotal}`;

    inConta.value = "";
    inValor.value = "";
    inConta.focus();
}
let btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click",registrarConta);