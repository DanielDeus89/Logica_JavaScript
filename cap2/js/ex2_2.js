function converterDuracao(){
    let inTitulo = document.getElementById("inTitulo").value;
    let inDuracao = document.getElementById("inDuracao").value;

    let horas = Math.floor(inDuracao / 60);
    let minutos = inDuracao % 60;

    document.getElementById("outTitulo").textContent = `${inTitulo}`;
    document.getElementById("outResposta").textContent = `${horas} hora(s) e ${minutos} minuto(s)`;    
}

let btConverter = document.getElementById("btConverter").addEventListener("click", converterDuracao);