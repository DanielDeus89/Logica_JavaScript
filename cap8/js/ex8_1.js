function trocarClube(){
    let imgClube = document.getElementById("imgClube")
    let divTitullo = document.getElementById("divTitullo")

    let clube;
    
    if(rbBrasil.checked){
        clube = `Brasil`
    }else if(rbPelotas.checked){
        clube = `Pelotas`
    }else{
        clube = `Farroupilha`
    }

    divTitullo.className = `row cores`+clube

    imgClube.src = `./img/${clube.toLowerCase()}.png`
    imgClube.className = `exibe`
    imgClube.alt = `Simbolo do ${clube}`

    localStorage.setItem((`clube`, clube))
}

let rbBrasil = document.getElementById("rbBrasil")
let rbPelotas = document.getElementById("rbPelotas")
let rbFarroupilha = document.getElementById("rbFarroupilha")

rbBrasil.addEventListener("change", trocarClube)
rbPelotas.addEventListener("change", trocarClube)
rbFarroupilha.addEventListener("change", trocarClube)

function verificarClube(){
    if(localStorage.getItem(`clube`)){
        let clube = localStorage.getItem(`clube`)

        if(clube == "Brasil"){
            rbBrasil.checked = true;
        }else if(clube == "Pelotas"){
            rbPelotas.checked = true
        }else{
            rbFarroupilha.checked = true
        }
        trocarClube()
    }
}
verificarClube()