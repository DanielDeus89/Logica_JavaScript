function calcularFuso(){
    let inHorario = document.getElementById("inHorario");
    let outHoraFranca = document.getElementById("outHoraFranca");

    let horario = Number(inHorario.value);

    if(!horario || isNaN(horario)){
        alert("Informe a hora no Brasil corretamente");
        inHorario.focus();
        return;
    }

    let horarioFranca = horario + 5;

    if(horarioFranca > 24){
        horarioFranca -= 24;
    }

    outHoraFranca.textContent = `Hora na França ${horarioFranca.toFixed(2)}`;

}
let btExibirHorario = document.getElementById("btExibirHorario");
btExibirHorario.addEventListener("click", calcularFuso);