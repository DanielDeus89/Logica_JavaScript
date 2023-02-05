do{
    var num = Number(prompt("Numero: "));
    if(!num){
        alert("Digite um numero valido...");
    }
}while (!num);

var pares = `Pares entre 1 e ${num}: `;

if(num>=2){
    pares += "2";
}

for(var i=4; i<=num; i+=2){
    pares += `, ${i}`;
}
alert(pares);