// a) Elaborar um programa que leia o nome de uma fruta e um número. O
// programa deve repetir a exibição do nome da fruta, de acordo com o número
// informado. Utilize o “*” para separar os nomes. A Figura 4.15 ilustra a
// execução do programa

function exibirFrutas(){
    let inFruta = document.getElementById("inFruta");
    let inNumero = document.getElementById("inNumero");

    let fruta = inFruta.value;
    let numero = Number(inNumero.value);

    if(!fruta){
        alert("Campo Fruta Vazio");
        inFruta.focus();
        return;
    }
    if(!numero || numero<1){
        alert("Insira um Numero valido")
    }

    let resp = '';
    for(let i=1; i<numero; i++){
        resp+= `${fruta} *`;
    }
    resp+= `${fruta}`;

    document.getElementById("outFrutas").textContent = resp;

}
let btRepetir = document.getElementById("btRepetir").addEventListener("click", exibirFrutas);