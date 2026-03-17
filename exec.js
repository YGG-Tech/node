
// IF
// 1. Crie um programa que receba um número em uma variável e verifique se ele é positivo, negativo ou zero, mostrando o resultado no console.✔
// 2. Crie um programa que receba uma idade e informe se a pessoa é maior de idade ou menor de idade.✔
// 3. Crie um programa que receba um número e verifique se ele é par ou ímpar.✔
// 4. Crie um programa que receba dois números e mostre qual deles é o maior.✔
// 5. Crie um programa que simule um login simples. Verifique se o usuário e a senha digitados correspondem a valores previamente definidos no código.✔

//1.

// let numero = 0;

// if(numero == 0){

//     console.log("este numero é nulo: ", numero);
// }
// else if(numero <=0){

//     console.log("este numero é negativo: ", numero);
// }
// else{

//     console.log("este numero é positivo: ", numero);
// }

//2.

// let idade = 17;

// if(idade < 18){
//     console.log("Voce é menor de idade: ", idade);
// }

// else {
//     console.log("Voce é maior de idade: ", idade);
// }

//3. 

// let numero = 1;

// if(numero & 2){
//     console.log(numero ,"este numero é par");
// }
// else{
//    console.log(numero, "este numero é impar");
// }

//4.

// let numero1 = 2;
// let nuemro2 = 2;

// if( numero1 < nuemro2){
//     console.log("o numeros são: ", numero1, " E ",nuemro2, "\nO numero maior é: ", nuemro2);
// }
// else if(nuemro2 < numero1){
//      console.log("o numeros são: ", numero1, " E ",nuemro2, "\nO numero maior é: ", numero1);
// }
// else{
//     console.log("os dois sao iguais ou nao existem");
// }

//5.
// let nome = "marcia";
// let login = "oi";
// let senha = 123;

// if(login == "oi" && senha == 123){
//     console.log("usuario entrou bem vindo(a)!! ", nome);
// }
// else{
//     console.log("boa tentativa mas esta errado volte e tente novamente");
// }

// Exercícios com for

// 6. Crie um programa que use um for para mostrar os números de 1 até 10 no console.✔
// 7. Crie um programa que use um for para mostrar os números de 10 até 1 (contagem regressiva).✔
// 8. Crie um programa que use um for para mostrar todos os números pares de 0 até 20.✔
// 9. Crie um programa que use um for para mostrar a tabuada de um número definido em uma variável.✔
// 10. Crie um programa que use um for para calcular e mostrar a soma de todos os números de 1 até 100.✔

// 6.
// for( let i = 1; i < 11; i++){

//     console.log("numero: ", i);
// }

//7.
// for( let i = 10; i > 0; i--){
//     console.log("contagem regressiva: ", i);
// }

//8.
// for (let i = 0; i < 21; i++) {
//     if (i % 2 == 0) {
//         console.log(i, "este numero é par");
//     }
//     else {
//         console.log(i);
//     }
// }

//9.

// let num =  5;

// for (let i = 0; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

//10.
// let soma = 0;
// for(i = 1; i <=100; i++){
//    soma = soma + i;
//    let resultado = soma+i;
//     console.log(i ,"a soma dos nuemeros são",  (resultado));
// }
// Exercícios com while

// 11. Crie um programa que use while para mostrar os números de 1 até 10.✔
// 12. Crie um programa que use while para mostrar uma contagem regressiva de 5 até 1.✔
// 13. Crie um programa que use while para somar os números de 1 até 10 e mostrar o resultado final.✔
// 14. Crie um programa que use while para mostrar todos os múltiplos de 3 até 30.✔
// 15. Crie um programa que comece com o número 1 e vá dobrando o valor enquanto ele for menor ou igual a 100, mostrando cada resultado.

//11.
// let i = 1;
// while(i <= 10){
//  console.log(i);
//  i++;
// }

//12.
// let i = 5;
// while(i > 0){
//     console.log(i);
//     i--;
// }

//13.
// let i = 1;
// let soma = 0;
// while(i <11){
//     soma = soma + i;
//     console.log(i,"Estes numeros estao somados", soma );
//     i++;

// }

//14.
// let i = 0;
// while( i <=30){
//     if(i % 3 == 0){
//         console.log(i,"estes sao os multiplos de 3: ", i);
//     }
//     else{
//         console.log(i,"Estes numeros NÃO sao multiplos de 3: ", i)
//     }
//     i++
// }

// 15.1
// let i = 1;
// let dobrado = 0;
// while(i < 101){
//     if(i < 101){
//         dobrado = i + 2;
//         console.log(i,"esta sendo dobrado", dobrado);
//     }
//     i++;
// }
// 15.2

// let i = 1;
// let dobrado = 2
// while(i <101){
//     if(i < 101){
//         dobrado = dobrado + i;
//         console.log(i,"esta sendo dobrado", dobrado);
//     }
//     i++;
// }

// 16. Crie um programa que use do...while para **mostrar os números de 1 até 5.
    // i= 0;
    // do{
    //     i +=1;
    //     console.log(i,"Este numer esta sendo contado");
        
    // }while(i < 5);
// 17. Crie um programa que use do...while para **mostrar uma contagem regressiva de 10 até 0.
    // i = 11;
    // do{
    //     i -=1;
    //     console.log(i,"este numero esta sendo decrementado");
    // }while(i > 0);
// 18. Crie um programa que use do...while para **mostrar a tabuada do número 3.
        // let i = 0;
        // let num = 3;
        // do{
        //     i += 1;
        //     console.log(i,"X",num,"=", (num*i));

        // }while(i <= 9);

// 19. Crie um programa que use do...while para **somar os números de 1 até 5 e mostrar o resultado final.
    // let i = 0;
    // let soma = 0;
    // do{

    //     i += 1;
    //     soma = soma + i;
    //     console.log(i ,"somado com", soma);

    // }while(i < 5);
// 20. Crie um programa que use do...while para **mostrar todos os números ímpares até 15.
    // let i = 0;
    // do{
    //     i+=1;
    //     if(i %2 !== 0){
    //         console.log(i,"este numero é impar");
    //     }
    //     else{
    //         console.log(i,"este numero é par")
    //     }
    // }while(i < 15); 

// 1. Crie um programa que inverta uma string. Exemplo: "javascript"
//Anotações: split converte a string em um array o reverse inverte o array e o join volta eles como uma string
            // let teste = "javascript";
            // let strinvertida = teste.split('').reverse().join('');
            // console.log(strinvertida); 
// 2. Crie um programa que conte quantas vogais existem em uma palavra. Exemplo: "programacao"
//anotação .length conta todos os caracteres ja o match acha o caractere expecifico
    // let palavra ="programacao";
    // const contagemA = (palavra.match(/a/gi) || []).length;
    // const contagemE = (palavra.match(/e/gi) || []).length;
    // const contagemI = (palavra.match(/i/gi) || []).length;
    // const contagemO = (palavra.match(/o/gi) || []).length;
    // const contagemU = (palavra.match(/u/gi) || []).length;

    // console.log("Aqui esta a contagem de vogais: ",contagemA,"<- A ",contagemE,"<- E ",contagemI,"<- I ",contagemO,"<- O ",contagemU,"<-U");
  

// 3. Crie um programa que calcule o fatorial de um número. Exemplo: 5! = 5 × 4 × 3 × 2 × 1 

    // let multiplic = 1;
    // const readlineSync = require('readline-sync');
    // let i =readlineSync.question("Qual o numero da fatorial: ")
    
    // for(i ; i > 0; i--){
    //  multiplic = multiplic * i;
    //     console.log("Fatorial do numero: ", i,"!" , "=", multiplic);
    // }

// 4. Crie um programa que gere os primeiros N números da sequência de Fibonacci. Exemplo: 10 números 
// anotações: .slice  retorna a copia de uma sessão no array
// function fibonacci(n){
// let sequencia = [0, 1];
//   if(n < 2) return sequencia.slice(0, n);
//   for(let i = 2; i < n; i++){
//     let proximo = (sequencia[i - 1] + sequencia[i - 2]);
//     sequencia.push(proximo)
//   }
//   return sequencia.join(' ');
// }
// console.log(fibonacci(10));

// 5. Crie um programa que verifique se uma palavra é um palíndromo (igual de trás para frente). Exemplo: "arara" 


// 6. Crie um programa que conte quantas vezes cada letra aparece em uma palavra. Exemplo: "banana" 
    // const palavra = "banana";
    // const testestr = palavra.split('');
    // const letra = test
    
    // for(let i = 0; i < testestr.length; i++){
    //     if( palavra[i] == testestr){
    
         
    // }}
    // console.log(testestr);
    
    
// 7. Crie um programa que verifique se um número é um número de Armstrong. Exemplo: 153
// mesmo em js ou qualquer outra linguagem é muito importante usar as functions para separar e organizar.
function Armstrong(numero){
    let num = numero.toString().split('');
    let tamanho = num.length;
    const soma = num.reduce((acumulador, valorAtual) => acumulador + Math.pow(parseInt(valorAtual), tamanho), 0); 
    if (soma === numero) {
        console.log(
            numero + " É um numero de Armstrong");
    }
    else {
        console.log
            (numero + " Não é um numero de Armstrong");
    }

};
 Armstrong(153);
 Armstrong(9);
 Armstrong(10);
 Armstrong(156);
// 8. Crie um programa que verifique se duas palavras são anagramas. Exemplo: "amor" "roma"

