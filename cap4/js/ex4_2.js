function mostrarResultado(){
    let inNumero = document.getElementById("inNumero");
    let outResultado = document.getElementById("outResultado");

    let numero = Number(inNumero.value);

    if(!numero){
        alert("Valor Invalido. Insira um valor Válido.");
        inNumero.focus();
        return;
    }

    let  resposta = `Entre ${numero} e 1: `;    
    let i=1;
    for(let i=numero; i>1; i--){
        resposta += `${i}, `;
    }
    resposta += `${i}. `;
    outResultado.textContent = resposta;
}
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarResultado);