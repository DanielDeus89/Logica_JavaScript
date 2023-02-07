// b) Elaborar um programa que leia a velocidade permitida em uma estrada e
// a velocidade de um condutor. 
// Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. 
// Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. 
// E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”
function verificarVelocidade(){
    let inVeloPermitida = document.getElementById("inVeloPermitida");
    let inVeloCondutor = document.getElementById("inVeloCondutor");
    let outSituacao = document.getElementById("outSituacao");

    let veloPermitida = Number(inVeloPermitida.value);
    let veloCondutor = Number(inVeloCondutor.value);

    if(!veloPermitida || !veloCondutor){
        alert("Velocidade Invalidade, Por favor insira um valor valido.")
        inVeloPermitida.focus();
        return;
    }

    let veloPermitida20 = (veloPermitida * 1.2);

    let situacao, corSituacao;
    if(veloCondutor <= veloPermitida){
        situacao = "Sem Multa."
        corSituacao = 'green'
    }else if(veloCondutor <= (veloPermitida20)){
        situacao = "Multa leve."
        corSituacao = 'yellow'
    }else{
        situacao = "Multa Grave."
        corSituacao = 'red'
    }

    outSituacao.textContent = situacao;
    outSituacao.style.color = corSituacao;
}
let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);






