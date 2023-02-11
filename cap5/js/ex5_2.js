let erros = [];
let sorteado = Math.floor(Math.random()*100)+1;

const CHANCES = 6;


function apostarNumero(){
    let inNumero = document.getElementById("inNumero");
    let numero = Number(Math.floor(inNumero.value));
 
    if(!numero || numero<=0 || numero > 100 || Math.floor(numero)){
        alert("Informe um Número valido...");
        inNumero.focus();
        return;
    }

    let outErros = document.getElementById("outErros");
    let outChances = document.getElementById("outChances");
    let outDica = document.getElementById("outDica");
  
    if(numero == sorteado){
        alert("Parabéns!! Você Acertou!!!");

        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = `Parabés!!! Número sorteado ${sorteado}`;        
    }else{
        if(erros.indexOf(numero) >=0){
            alert(`Voce ja apostou o número ${numero}. Tente outro...`);   
        }else{
            erros.push(numero);
            let numErros = erros.length;
            let numChances = CHANCES - numErros;
            outErros.textContent = `${numErros} (${erros.join(", ")})`;
            outChances.textContent = numChances;

            if(numChances == 0){
                alert("Suas Chances acabaram");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = `Gave Over!! Número sorteado: ${sorteado}`;   

            }else{
                let dica = numero < sorteado ? "Maior" : "Menor";
                outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`;
            }
        }
    }
    inNumero.value = "";
    inNumero.focus();
}
let btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

function JogarNovamente(){
    location.reload();
}
let btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", JogarNovamente);