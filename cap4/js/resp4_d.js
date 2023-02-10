// d) Elaborar um programa que leia um número e exiba estrelas na página, em
// linhas diferentes. A cada nova linha, o número de estrelas deve ser
// incrementado. Observação: caso você informe um valor alto, as linhas
// podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda
// da página. Para evitar que isso ocorra, crie uma nova classe no arquivo
// estilos.css, 

function criarEstrelas(){
    let inNumeroLinhas = document.getElementById("inNumeroLinhas");

    let numeroLinhas = Number(inNumeroLinhas.value);

    if(!Number.isInteger(numeroLinhas )|| numeroLinhas <= 0){
        document.getElementById("outEstrelas").textContent = "Por favor, insira um número inteiro positivo.";
        inNumeroLinhas.focus();
        return;
    }

    let resp = "";
    for(let i=0; i<= numeroLinhas; i++){
        resp += `${'*'.repeat(i)}\n`;
    }

    document.getElementById("outEstrelas").textContent = resp;
}
let btCriarEstrelas = document.getElementById("btCriarEstrelas").addEventListener("click", criarEstrelas);