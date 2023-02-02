function mostrar(){
    let inNome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = `Ola ${inNome}` ;
}
let Mostrar = document.getElementById("btMostrar").addEventListener("click", mostrar);



