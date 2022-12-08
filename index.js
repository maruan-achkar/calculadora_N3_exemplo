//so um exemplo de como fazer a calculadora, fiz em 15 minutos entao talvez tenha alguns bugs, ACHO que talvez de pra fazer a operacao direto de um outro jeito mais curto mas vejo isso outro dia

//funcao que troca o simbolo da operacao quando o usuario escolhe algo no <select>
function optype(){
    //trocar aquele texto entre os inputs pelo tipo de operacao que o usuario selecionou
    let op = document.getElementById("select").value;
    document.getElementById("sinal").innerHTML = op;
}

function input(){
    //pegar o valor do primeiro input, como o document.getElementById("input1").value vai retornar uma string, eu uso o n1 = parseFloat(n1) pra transformar em float.
    let n1 = document.getElementById("input1").value;
    n1 = parseFloat(n1);
    console.log(n1);

    //pegar o valor do primeiro input, como o document.getElementById("input2").value vai retornar uma string, eu uso o n2 = parseFloat(n2) pra transformar em float.
    let n2 = document.getElementById("input2").value;
    n2 = parseFloat(n2);
    console.log(n2);

    //pegar qual tipo de operacao o usuario quer fazer, baseado no <select> que tem no HTML
    let op = document.getElementById("select").value;


    //dependendo de qual tipo de operacao o usuario selecionar, executar uma funcao. se for soma executa soma() se for subtracao executa subtracao()
    switch(op){
        case '+':
            soma(n1, n2);
            break;
        case '-':
            subtracao(n1, n2);
            break;
        case '*':
            multiplicacao(n1, n2);
            break;
        case '/':
            divisao(n1, n2);
            break;
    }
}

//funcao de SOMA que vai somar N1+N2, colocar o resultado na variavel resp e executar a funcao output()
function soma(n1, n2){
     let resp = n1 + n2;
    output(resp);
}

//funcao de SUBTRACAO que vai subtrair N1-N2, colocar o resultado na variavel resp e executar a funcao output()
function subtracao(n1, n2){
     let resp = n1 - n2;
    output(resp);
}

//funcao de MULTIPLICACAO que vai multiplicar N1*N2, colocar o resultado na variavel resp e executar a funcao output()
function multiplicacao(n1, n2){
     let resp = n1 * n2;
    output(resp);
}

//funcao de DIVISAO que vai dividir N1/N2, colocar o resultado na variavel resp e executar a funcao output()
function divisao(n1, n2){
     let resp = n1 / n2;
    output(resp);  
}

//funcao OUTPUT, que vai exibir o resultado pro usuario
function output(resp){

   console.log(resp);

   //imprimir a string "Resultado = " e tambem o valor de resp, a variavel que contem o resultado da operacao. o sinal de + significa que ele vai imprimir os dois juntos, um depois do outro
   document.getElementById("resultado").innerHTML = 'Resultado = ' + resp;
}


