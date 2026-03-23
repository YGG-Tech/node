// 1. Exercícios com if

// Simples

// 1. Par ou ímpar
    
    // let num = 3;

    // if (num % 2 == 0){
    //     console.log("É par");
    // }
    // else {
    //     console.log("É impar");
    // }
    
// 2. Maior de dois números
    
// let num1 = 2;
// let num2 = 33;

// if( num1 > num2){
//     console.log("o numero maior é ", num1);
// }
// else{
//     console.log("o numero maior é ", num2);
// }
    
// 3. Aprovado ou reprovado
    
//     Nota ≥ 7 → aprovado, senão reprovado.
    // let nota1 = 7;
    // let nota2 = 10;
    // let media = (nota1 + nota2)/2;
    // if (media > 7){
    //     console.log("Está aprovado a media é ", media);
    // }
    // else{
    //     console.log("Esta reprovado  a media é ", media);
    // }

// Intermediário
// 1. Classificação de idade
//      0–12: criança
//      13–17: adolescente
//      18+: adulto

    // const readline = require("readline-sync");
    // let idade = readline.question("Qual a sua idade? ");
   
//     if(idade >= 18){
//         console.log("voce é maior de idade");
//    }
//    else if(idade <=12){
//     console.log("voce é criança ainda");
//    }
//    else {
//     console.log("voce é adolecente");
//    }

// 2. Calculadora simples
    
//     Receba: número1, número2 e operação (+, -, *, /) e execute usando if.
    // const readline = require("readline-sync");
    // let numero1 = readline.question("Qual o primeiro numero: ");
    // let numero2 = readline.question("Qual o segundo nuemro: ");
    // let op = readline.question("Qual operação - , + , * <- multiplicação , / <- divisão ");
    // //operação +
    // if (op == "+"){
    //     let soma = parseInt(numero1) + parseInt(numero2);
    //     console.log("a soma de: ",numero1 ," + ",numero2," = ", soma );
    // }
    // //operação -
    //     if (op == "-"){
    //     let menos = parseInt(numero1) - parseInt(numero2);
    //     console.log("a subtração de: ",numero1 ," - ",numero2," = ", menos );
    // }
    // //operação *
    //     if (op == "*"){
    //     let vezes = parseInt(numero1) * parseInt(numero2);
    //     console.log("a soma de: ",numero1 ," X ",numero2," = ", vezes );
    // }
    // //operação /
    //     if (op == "/"){
    //     let div = parseInt(numero1) / parseInt(numero2);
    //     console.log("a soma de: ",numero1 ," % ",numero2," = ", div.toFixed(2) );
    // }

// 2. Exercícios com for

// Simples

// 1. Contagem de 1 a 10
    
//     Mostre os números de 1 até 10.
//  for (let i = 1; i <= 10; i++) {
//    console.log(i);
   
// }

    
// 2. Soma de 1 a N
    
//     Leia N e some de 1 até N.
//  let N = 12;
//  for (let i = 1; i <= N ; i++) {
//     soma = (i + N)
//    console.log("somando ", i, " + ", N, " = ", soma);
   
// }

    
// 3. Tabuada
    
//     Mostre a tabuada de um número.
    // num = 10;
    // for(let i = 1; i <=10; i++ ){
    //     vezes= (num * i);
    //     console.log(num," * ", i, " = ", vezes);
    // }

// Intermediário

// 1. Contar pares
    
//     Conte quantos números pares existem de 1 até N.
    // let N = 10;
    // for(let i = 0; i <= N ; i++){
    //     if(i % 2 == 0 ){
    //         console.log(i ,"é par", N);
    //     }
    //     else{
    //         console.log(i, "é impar", N);
    //     }
    // }
// 2. Fatorial
    
//     Calcule o fatorial de um número (ex: 5! = 120).
   
    // let multiplic = 1;
    // const readlineSync = require('readline-sync');
    // let i =readlineSync.question("Qual o numero da fatorial: ")
    
    // for(i ; i > 0; i--){
    //  multiplic = multiplic * i;
    //     console.log("Fatorial do numero: ", i,"!" , "=", multiplic);
    // }

//3. Exercícios com while
// Simples

// 1. Contagem até 10
    // let i = 1;
    // while(i <=10){
    //     console.log(i);
    //     i++;
    // }
    
//     Use while para imprimir de 1 a 10.
    
// 2. Somar até zero
    
//     Leia números até o usuário digitar 0 e mostre a soma.
const readline = require("readline-sync");
let soma = 0;
let i = true;

while(i){
    let numero = readline.questionInt("digite um numero: ");
    if( numero > 0){
        soma = soma + numero;
        console.log(`Soma: ${soma}`);
    }
    else if(numero == 0){
        console.log("Programa Encerrado");
        i = false;

    }
}
    
// 3. **Contar números positivos**
    
//     Continue lendo até número negativo e conte positivos.
    

// **Intermediário**

// 1. **Senha correta**
    
//     Peça senha até acertar (ex: "1234").
    
// 2. **Maior número digitado**
    
//     Leia números até 0 e informe o maior.
    

// ## **4. Exercícios com do...while**

// **Simples**

// 1. **Executar pelo menos uma vez**
    
//     Mostre mensagem até usuário digitar "sair".
    
// 2. **Soma até parar**
    
//     Some números até usuário decidir parar.
    
// 3. **Menu simples**
// 4. 1 - Olá
// 5. 2 - Tchau
// 6. 0 - Sair

// **Intermediário**

// 1. **Validação de entrada**
    
//     Peça número entre 1 e 10 até ser válido.
    
// 2. **Calculadora com repetição**
    
//     Execute operações até o usuário sair.
    

// ## **5. Exercícios com Vetores (Arrays)**

// **Simples**

// 1. Mostrar elementos
    
//     Dado um array, mostre todos os elementos.
    
// 2. Somar valores
    
//     Some todos os números de um array.
    
// 3. Maior valor
    
//     Encontre o maior número do array.
