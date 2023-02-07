function exibirEstrelas(){
    let inNumero = document.getElementById("inNumero");

    let numero = Number(inNumero.value);

    if(!numero){
        alert("Número Invalido.");
        inNumero.focus();
        return;
    }

    let estrelas = "";
    for(let i=0; i<=numero-1; i++){
        if(i%2==0){
            estrelas += `*`;
        }else{
            estrelas += `*`;
        }
    }
    document.getElementById("outEstrelas").textContent = estrelas;
}
let outPreecher = document.getElementById("outPreecher").addEventListener("click", exibirEstrelas);