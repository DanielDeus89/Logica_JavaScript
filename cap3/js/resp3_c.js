// Elaborar um programa para simular um parquímetro, o qual leia o valor
// de moedas depositado em um terminal de estacionamento rotativo. O
// programa deve informar o tempo de permanência do veículo no local e o
// troco (se existir), como no exemplo da Figura 3.9. Se o valor for inferior ao
// tempo mínimo, exiba a mensagem: "Valor Insuficiente"

function verificarDeposito(){
    let inValor = document.getElementById("inValor");
    let outTempo = document.getElementById("outTempo");
    let outTroco = document.getElementById("outTroco");
    
    let valor = Number(inValor.value);

    if(!valor || valor < 1){
        alert("novo !valor");
        inValor.focus();
        return;
    }

    let troco, tempo;
    if(valor >=3){
        tempo = 120;
        troco = valor - 3; 
    }else if(valor >= 1.75){
        tempo = 60;
        troco = valor - 1.75;
    }else{
        tempo = 30;
        troco = valor - 1; 
    }
    outTempo.textContent = `Tempo: ${tempo} min`
    outTroco.textContent = `Troco R$ ${troco.toFixed(2)}`;

}
let btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", verificarDeposito);