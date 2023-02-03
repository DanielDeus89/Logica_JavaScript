// c) Um supermercado está com uma promoção – 
// Para aumentar suas vendas no setor de higiene, 
// cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto 
// (para um item) na compra de três
// unidades do produto. Elaborar um programa que leia descrição e preço
// de um produto. Após, apresente as mensagens indicando a promoção –
// conforme o exemplo ilustrado na Figura 2.13. 
function verPromo(){
    let inProduto = document.getElementById("inProduto");
    let inPreco = document.getElementById("inPreco");

    let produto = inProduto.value;
    let preco = inPreco.value;
    
    let meioPreco = (preco * 0.5);
    let total = (preco * 2) + meioPreco;


    document.getElementById("outPromo").textContent = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
    document.getElementById("outInfo").textContent = `O 3º produto custa apenas R$: ${meioPreco.toFixed(2)}`;
}

let btVerPromo = document.getElementById("btVerPromo").addEventListener("click", verPromo);