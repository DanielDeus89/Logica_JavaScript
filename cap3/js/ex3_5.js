function exibirRaiz(){
    let inNumero = document.getElementById("inNumero");
    let outResultado = document.getElementById("outResultado");

    let numero = Number(inNumero.value);

    if(!numero){
        alert("Informe um número valido...");
        inNumero.focus();
        return;
    }

    var raiz = Math.sqrt(numero);

    if(Number.isInteger(raiz)){
        outResultado.textContent = `Raiz: ${raiz}`;
    }else{
        outResultado.textContent = `Não há raiz exata para: ${numero}`;
    }
}
let btExibirRaiz = document.getElementById("btExibirRaiz");
btExibirRaiz.addEventListener("click", exibirRaiz);