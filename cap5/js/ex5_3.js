let carros = [];

function adicionarCarros(){
    let inModelo = document.getElementById("inModelo");
    let inValor = document.getElementById("inValor");

    let modelo = inModelo.value.trim();
    let valor = Number(inValor.value.trim());

    if(!modelo || !valor){
        alert("Informe Corretamente os Dados!");
        return;
    }

    carros.push({modelo:modelo, valor:valor.toFixed(2)})

    listarCarros();

}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

inModelo.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        inValor.focus();
    }
});

inValor.addEventListener("keydown",function(event){
    if(event.keyCode === 13){
        adicionarCarros();
        inModelo.value = "";
        inValor.value= "";
        inModelo.focus();
    }
});


function listarCarros(){
    if(carros.length == 0){
        alert("Não há carros na lista");
        return;
    }

    var listaCarros = "";
    for(let i=0; i<carros.length; i++){
        listaCarros += `${carros[i].modelo} R$: ${carros[i].valor}\n`;
    }

    let outLista = document.getElementById("outLista");
    outLista.textContent = listaCarros;
}
let btListar = document.getElementById("btListar");
btListar.addEventListener("click",listarCarros);

function filtrarCarros(){
    var maximo = Number(prompt("Qual o Valor maximo que o cliente deseja pagar?"));

    if(!maximo){
        return;
    }

    var listaCarros = "";
    for(let i=0; i<carros.length; i++){
        if(carros[i].valor <= maximo){
            listaCarros += `${carros[i].modelo} R$: ${carros[i].valor}\n`;
        }
    }
    let outLista = document.getElementById("outLista");
    outLista.textContent = listaCarros;

    if(carros.length == 0){
        alert("Não há carros para Filtrar");
    }else{
        outLista.textContent = `Carros até R$ ${maximo.toFixed(2)} \n------------------\n${listaCarros}`;
    }

}
let btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);