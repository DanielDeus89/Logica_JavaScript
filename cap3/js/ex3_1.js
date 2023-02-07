function calcularMedia(){
    let inAluno = document.getElementById("inAluno");    
    let inNota1 = document.getElementById("inNota1");    
    let inNota2 = document.getElementById("inNota2");    

    let aluno = inAluno.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    let media = (nota1+nota2)/2;

    let situacao, corStatus;
    if(media>=7){
        situacao = `Parabens ${aluno}! Você foi aprovado(a)`;
        corStatus = `blue`;
    }else if(media>=4){
        situacao = `Atenção ${aluno}! Você está em exame`;
        corStatus = `green`;
    }else{
        situacao = `Ops ${aluno}! Você foi reprovado(a)`;
        corStatus = `red`;
    }

    let outMedia = document.getElementById("outMedia");
    outMedia.textContent = `Média das Notas:  ${media.toFixed(1)}`;

    let outSituacao = document.getElementById("outSituacao");
    outSituacao.textContent = situacao;
    outSituacao.style.color = corStatus;
    
}
let exibirMedia = document.getElementById("exibirMedia");
exibirMedia.addEventListener("click", calcularMedia);