// b) Elaborar um programa para uma lan house de um aeroporto – O programa deve
// ler o valor de cada 15 minutos de uso de um computador e o tempo de
// uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
// sabendo que as frações extras de 15 minutos devem ser cobradas de
// forma integral. A Figura 2.12 exibe um exemplo com dados do
// programa
function calcularValor(){
    let inPreco = document.getElementById("inPreco");
    let inTempo = document.getElementById("inTempo");

    let preco = inPreco.value;
    let tempo = inTempo.value;

    let valor = Math.ceil(tempo / 15) * preco;

    document.getElementById("outValor").textContent = `Valor a Pagar: R$: ${valor.toFixed(2)}`;
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);