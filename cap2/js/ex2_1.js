function mostrar(){
    let inNome = document.getElementById("nome");
    let nome = inNome.value;

    document.getElementById("resposta").textContent = `Ola ${nome}` ;
}

let Mostrar = document.getElementById("btMostrar").addEventListener("click", mostrar);



