function trocarCluber(){
    let imgClube = document.getElementById("imgClube")
    let divTitulo = document.getElementById("divTitulo")

    let clube

    if(rbBrasil.checked){
        clube = "Brasil"
    }else if(rbPelotas.checked){
        clube = "Pelotas"
    }else{
        clube = "Farroupilha"
    }

    divTitulo.className = "row cores"+clube

    imgClube.src = `./img/${clube.toLocaleLowerCase()}.png`
    imgClube.className = "exibe"
    imgClube.alt = `Simbolo do ${clube}`

    localStorage.setItem("clube", clube)
}

let rbBrasil = document.getElementById("rbBrasil")
let rbPelotas = document.getElementById("rbPelotas")
let rbFarroupilha = document.getElementById("rbFarroupilha")

rbBrasil.addEventListener("change", trocarCluber)
rbPelotas.addEventListener("change", trocarCluber)
rbFarroupilha.addEventListener("change", trocarCluber)

function verificarClube(){
    if(localStorage.getItem("clube")){
        let clube = localStorage.getItem("clube")

        if(clube == "Brasil"){
            rbBrasil.checked = true
        }else if(clube == "Pelotas"){
            rbPelotas.checked = true
        }else{
            rbFarroupilha.checked = true
        }

        trocarCluber()
    }
}

verificarClube()
