function exibirNotas(){
    let inSaque = document.getElementById("inSaque");
    let outNotasCem = document.getElementById("outNotasCem");
    let outNotasCinquentas = document.getElementById("outNotasCinquentas");
    let outNotasDez = document.getElementById("outNotasDez");

    outNotasCem.textContent = "";
    outNotasCinquentas.textContent = "";
    outNotasDez.textContent = "";

    let saque = Number(inSaque.value);

    if(!saque){
        alert("Informe o valor do Saque corretamente");
        inSaque.focus();
        return;
    }

    if(saque%10!=0){
        alert("valor invalido para Notas Disponiveis (R$10, 50, 100)");
        inSaque.focus();
        return;
    }

    let notasCem = Math.floor(saque / 100);
    let resto = (saque%100);

    let notasCinquentas = Math.floor(resto / 50);
    resto = (resto%50);   
    let notasDez = Math.floor(resto/10);

    if(notasCem>0){
        outNotasCem.textContent = `Notas de R$100: ${notasCem}`;
    }
    if(notasCinquentas>0){
        outNotasCinquentas.textContent = `Notas de R$50: ${notasCinquentas}`;
    }
    if(notasDez>0){
        outNotasDez.textContent = `Notas de R$10: ${notasDez}`;
    }

}
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirNotas);