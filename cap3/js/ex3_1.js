function calcularMedia(){
    let inAluno = document.getElementById("inAluno");    
    let inNota1 = document.getElementById("inNota1");    
    let inNota2 = document.getElementById("inNota2");    

    let outSituacao = document.getElementById("outSituacao");
    let outMedia = document.getElementById("outMedia");

    let aluno = inAluno.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    let media = (nota1+nota2)/2;

    if(media>=7){
        outSituacao.textContent = `Parabens ${aluno}! Você foi aprovado(a)`;
        outSituacao.style.color = `blue`;
    }

    document.getElementById("outMedia").textContent = `Média das Notas:  ${media.toFixed(1)}`;
    
}
let exibirMedia = document.getElementById("exibirMedia").addEventListener("click", calcularMedia);