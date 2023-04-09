function mostrarDados(){
    var inModelo = document.getElementById("inModelo")
    var inAno = document.getElementById("inAno")
    var inPreco = document.getElementById("inPreco")

    var outClassificar = document.getElementById("outClassificar")
    var outPrecoVenda = document.getElementById("outPrecoVenda")

    var modelo = inModelo.value
    var ano = inAno.value
    var preco = inPreco.value

    if(modelo == " " || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)){
        alert("Informe corretamente os Dados do Veiculo")
        inModelo.focus()
        return
    }

    var classificacao = classificarVeiculo(ano)
    var precoVenda = calculaVenda(preco, classificacao)

    outClassificar.textContent = modelo + " - " + classificacao
    outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2)
}

function classificarVeiculo(ano){
    let anoAtul = new Date().getFullYear()
    let classif

    if(ano == anoAtul){
        classif = "Novo"
    }else if (ano == anoAtul - 1 || ano == anoAtul - 2){
        classif = "Seminovo"
    }else{
        classif = "Usado"
    }
    return classif
}

function calculaVenda(valor, status){
    let prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10
    return prVenda
}


var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", mostrarDados)