var inputsRadio = document.getElementsByTagName("input");

for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("change", trocarClube);
}

function trocarClube(){
    let imgClube = document.getElementById("imgClube")
    let divTitullo = document.getElementById("divTitullo")

    let clubes = [`Brasil`, `Pelotas`, `Farroupilha`];

    for (let i=0; i<4; i++){
        if(inputsRadio[i].checked){
            var selecao = i
            break
        }
    }
    
    if(selecao <=2){
        divTitullo.className = `row cores${clubes[selecao]}`


        imgClube.src = `./img/${clubes[selecao].toLowerCase()}.png`
        imgClube.className = `exibe`
        imgClube.alt = `Simbolo do ${clubes[selecao]}`    
        localStorage.setItem(`clube`, clubes[selecao])
    }else{
        divTitullo.className = `row`
        imgClube.className = `oculta`
        imgClube.alt = ``
        localStorage.removeItem(`clube`)
    } 
}


function verificarClube(){
    if(localStorage.getItem(`clube`)){
        var clube = localStorage.getItem(`clube`)

        if(clube == "Brasil"){
            inputsRadio[0].checked = true
        }else if(clube == "Pelotas"){
            inputsRadio[1].checked = true
        }else{
            inputsRadio[2].checked = true
        }
        trocarClube()
    }
}
verificarClube()