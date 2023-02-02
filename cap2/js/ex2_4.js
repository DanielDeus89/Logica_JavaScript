function calcularPreco(){
    let inQuilo = Number(document.getElementById("inQuilo").value);
    let inConsumo = Number(document.getElementById("inConsumo").value);

    let valor = (inQuilo / 1000) * inConsumo;

    document.getElementById("outValor").textContent = `Valor a pagar R$: ${valor.toFixed(2)}`;
}

let btCalcular = document.getElementById("btCalcular").addEventListener("click", calcularPreco);