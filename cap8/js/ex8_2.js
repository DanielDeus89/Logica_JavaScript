function trocarclube(){
    let imgClube = document.getElementById("imgClube")
    let divTitulo = document.getElementById("divTitulo")

    var clubles = ['Brasil','Pelotas','Farroupilha']

    for(let i=0; i<4; i++){
        if(inputsRadio[i].checked){
            let selecaoo = i
            break
        }
    }
    if(selecaoo <= 2){
        divTitulo.className = `row cores${clubles[selecaoo]}`
        imgClube.src = `img/${clubles[selecaoo].toLocaleLowerCase()}.png`
        imgClube.className = 'exibir'
        imgClube.alt = `Simbolo do ${clubles[selecaoo]}`
        localStorage.setItem(`clube`,clubles[selecaoo])
    }else{
        divTitulo.className = `row`
        imgClube.alt = ``
        localStorage.removeItem(`clube`)
    }
}

function verificarClube(){
    if(localStorage.getItem(`clube`)){

        let clube = localStorage.getItem(`clube`)

        if(clube == `Brasil`){
            inputsRadio[0].checked = true
        }else if(clube == `Pelotas`){
            inputsRadio[1].checked = true
        }else{
            inputsRadio[2].checked = true
        }


        trocarclube()
    }
}

verificarClube()