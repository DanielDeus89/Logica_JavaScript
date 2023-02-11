let pacientes = [];
let mensagem = "";

function adicionarPaciente(){
    let inPaciente = document.getElementById("inPaciente");

    let paciente = inPaciente.value.trim();

    
    if(!paciente){
        mensagem = "Informe o nome do Paciente";
        document.getElementById("outPaciente").textContent = mensagem;
        inPaciente.focus();
        return;
    }
    pacientes.push(paciente);

    var lista = "";
    pacientes.forEach((p,i) =>{
        lista += `${i+1} - ${pacientes[i]}\n`;
    });


    document.getElementById("outPaciente").textContent = mensagem;
    document.getElementById("outListaPaciente").textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}
let btAdicionar = document.getElementById("btAdicionar").addEventListener("click", adicionarPaciente)

function atenderPaciente(){
    if(!pacientes.length){
        mensagem = "Não há pacientes na lista de espera";
        document.getElementById("outPaciente").textContent = mensagem;
        return;        
    }

    let atendido = pacientes.shift();
    document.getElementById("outPaciente").textContent = atendido;

    var lista = "";
    pacientes.forEach((p,i) =>{
        lista += `${i+1} - ${pacientes[i]}\n`;

    });
    document.getElementById("outListaPaciente").textContent = lista;

}
let btAtender = document.getElementById("btAtender").addEventListener("click", atenderPaciente);

function adicionarUrgente(){
    let inPaciente = document.getElementById("inPaciente");

    let paciente = inPaciente.value.trim();

    
    if(paciente == ""){
        mensagem = "Por favor, informe o nome do paciente.";
        document.getElementById("outPaciente").textContent = mensagem;
        inPaciente.focus();
        return;
    }
    pacientes.unshift(paciente);

    var lista = "";
    pacientes.forEach((p,i) => {
        lista += `${i+1} - ${pacientes[i]}\n`;

    });

    document.getElementById("outPaciente").textContent = mensagem;
    document.getElementById("outListaPaciente").textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}
let btUrgencia = document.getElementById("btUrgencia").addEventListener("click",adicionarUrgente);