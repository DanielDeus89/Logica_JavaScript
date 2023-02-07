function adicionarTarefa(){
    let inTarefa = document.getElementById("inTarefa");

    let tarefa = inTarefa.value;
    
    if(!tarefa){
        alert("Informe uma tarefa!");
        inTarefa.focus();
        return;
    }

    let divQuadro = document.getElementById("divQuadro");
    let h5 = document.createElement("h5");
    let texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    divQuadro.appendChild(h5);

    inTarefa.value = "";
    inTarefa.focus();

}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarTarefa);


function selecionarTarefa(){
    var h5 = document.getElementsByTagName("h5");

    let numH5 = h5.length;

    if(!numH5){
        alert("Não ha tarefas para selecionar");
        return;
    }

    var aux = -1;
    for(var i=0; i<numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            h5[i].className = "tarefaNormal";
            aux = i;
            break;
        }
    }
    if(aux == numH5 -1){
        aux = -1;
    }
    h5[aux+1].className = "tarefaSelecionada";

}
let btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa);

function retirarSelecionada(){
    let divQuadro = document.getElementById("divQuadro");
    let h5 = document.getElementsByTagName("h5");

    var numH5 = h5.length;

    var aux = -1;
    for(var i=0; i<numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            aux = i;
            break;
        }
    }

    if(aux == -1){
        alert("Selecionada uma tarefa para remove-la");
        return;
    }
    if(confirm(`Confirma Exclusão ${h5[aux].textContent}?`)){
        divQuadro.removeChild(h5[aux]);
    }
}
let btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada);

function gravaTarefas(){
    let h5 =document.getElementsByTagName("h5");

    let numH5 = h5.length;
    
    if(!numH5){
        alert("Não há tarefas pare seerem salvas");
        return;
    }

    let tarefas = "";

    for(let i=0; i<numH5; i++){
        tarefas += `${h5[i].textContent};`;
    }

    localStorage.setItem("tarefasDia", tarefas.substring(0, tarefas.length -1));
    if(localStorage.getItem("tarefasDia")){
        alert("OK! Tarefas Salvas");
    }
}
let btGravar = document.getElementById("btGravar");
btGravar.addEventListener("click", gravaTarefas);

function recuperarTarefasSalvas() {
    // verifica se há tarefas salvas no navegador do usuário
    if (localStorage.getItem("tarefasDia")) {
 
        var tarefas = localStorage.getItem("tarefasDia").split(";");

        var divQuadro = document.getElementById("divQuadro");
    // percorre todas as tarefas
        for (var i = 0; i < tarefas.length; i++) {
        var h5 = document.createElement("h5");
        var texto = document.createTextNode(tarefas[i]); 
        h5.appendChild(texto); // define que o texto será filho de h5
        divQuadro.appendChild(h5); // ...e que o h5 será filho de
        divQuadro
        }
    }
}
recuperarTarefasSalvas();