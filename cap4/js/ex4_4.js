alert("Digite 0 para Sair");

do{
    var num = Number(prompt("Numero: "));
    if(!num){
        var sair = confirm("Confirma Saída?");
        if(sair){
            break
        }else{
            continue;
        }
    }
    if(num%2==0){
        alert(`O Dobro de ${num} é ${num*2}`);
    }else{
        alert(`O Triplo de ${num} é ${num*3}`);

    }
}while(true);

alert("Bye, Bye...");