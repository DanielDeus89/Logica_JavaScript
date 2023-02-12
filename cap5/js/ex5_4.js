var criancas = []

function adicionarAdicionar(){
    let inNome = document.getElementById("inNome")
    let inIdade = document.getElementById("inIdade")

    let nome = inNome.value.trim()
    let idade = Number(inIdade.value.trim())

    if(!nome || !idade){
        alert("INsira valores Corretos")
        return
    }

    criancas.push({nome:nome, idade:idade})

    listarCriancas();

}
let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click",adicionarAdicionar)

inNome.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        inIdade.focus()
    }
});
inIdade.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        adicionarAdicionar()
        inNome.focus()
        inNome.value = ""
        inIdade.value = ""
    }
})

function listarCriancas(){
    if(criancas.length == 0){
        alert("Não há crianças na lista")
        return
    }

    let listaCriancas = ""
    for(let i=0; i<criancas.length; i++){
        listaCriancas += `${criancas[i].nome} - ${criancas[i].idade}\n`
    }

    let outLista = document.getElementById("outLista")
    outLista.textContent = listaCriancas
}
let btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarCriancas)


function resumirLista(){
    if(criancas.length == 0){
        alert("Não há nada pra Resumir")
        return
    }
    let copiaCriancas = criancas.slice()
    copiaCriancas.sort(function(a,b){
        return a.idade - b.idade
    })

    let resumo = ""

    let aux = copiaCriancas[0].idade
    var nomes = []

    for(let i=0; i< copiaCriancas.length; i++){
        if(copiaCriancas[i].idade == aux){
            nomes.push(copiaCriancas[i].nome)
        }else{
            resumo += `${aux} ano(s): ${nomes.length} crianca(s) - `
            resumo += `${(nomes.length / copiaCriancas.length * 100).toFixed(2)}%\n`
            resumo += `(${nomes.join(", ")})\n\n`
            aux = copiaCriancas[i].idade
            nomes = []
            nomes.push(copiaCriancas[i].nome)
        }
    }

    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";  
    resumo += (nomes.length / copiaCriancas.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    
    document.getElementById("outLista").textContent = resumo;

}
let btResumir = document.getElementById("btResumir")
btResumir.addEventListener("click",resumirLista)