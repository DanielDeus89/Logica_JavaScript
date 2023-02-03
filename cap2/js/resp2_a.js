// a) Umafarmáciaestácom uma promoção – Na compra de duas unidades de um
// mesmo medicamento, o cliente recebe como desconto os centavos do
// valor total. Elaborar um programa que leia descrição e preço de um
// medicamento. Informe o valor do produto na promoção. A Figura 2.11
// apresenta a tela com um exemplo de dados de entrada e saída do
// programa.


function calcularPromo(){
    let inMedicamento = document.getElementById("inMedicamento");
    let inValor = document.getElementById("inValor");
    
    let medicamento = inMedicamento.value;
    let valor = Number(inValor.value);

    if(medicamento == '' || (isNaN(valor) || valor<=0)){
        alert('Valor invalido para ');
        return;
    }

    let precoDesc = Math.floor(valor * 2) ;

    document.getElementById("outMedicamento").textContent = `Promoção de ${medicamento}`;
    document.getElementById("outTotal").textContent = `Leve 2 por apenas R$ ${precoDesc.toFixed(2)}`;
}

let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularPromo);