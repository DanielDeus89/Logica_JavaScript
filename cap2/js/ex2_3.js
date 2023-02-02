function mostrarPromo(){
    let inVeiculos = document.getElementById("inVeiculos").value;
    let inPreco = document.getElementById("inPreco").value;

    let entrada = inPreco / 2;
    let parcela = entrada / 12;

    document.getElementById("outVeiculo").textContent = `Promoção: ${inVeiculos}`;
    document.getElementById("outEntrada").textContent = `Entrada R$: ${entrada.toFixed(2)}`;
    document.getElementById("outParcela").textContent = `+12x de  R$: ${parcela.toFixed(2)}`;
}

let btVerPromocao = document.getElementById("btVerPromocao").addEventListener("click", mostrarPromo);