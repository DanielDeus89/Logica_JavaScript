function incluirAposta(){
    let inNome = document.getElementById("inNome")
    let inPeso = document.getElementById("inPeso")

    let nome = inNome.value.trim()
    let peso = Number((inPeso.value))

    if(!nome || !peso){
        alert("Dados Invalidos")
        inNome.focus()
        return
    }

    // if(verApostaExiste(peso)){
    //     alert("Alguem ja apostou esse peso, informe outro...")
    //     inPeso.focus()
    //     return
    // }

    if(localStorage.setItem(`melanciaNome`)){
        var melanciaNome = localStorage.getItem(`melanciaNome;${nome}`)
        var melanciaPeso = localStorage.getItem(`melanciaPeso;${peso}`)
    }else{
        
        localStorage.setItem(`melanciaNome${melanciaNome}`)
        localStorage.setItem(`melanciaPeso${melanciaPeso}`)
    }

    // mostrarApostas()

    inNome.value = ""
    inPeso.value = ""
    inNome.focus()
}
let btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click",incluirAposta)