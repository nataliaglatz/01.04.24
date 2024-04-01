/**
 * o algoritmo ifelse serve para validacao de dados, por exemplo:
 * 
 * if (variavel1 == variavel2) { algo irá acontecer se a avariavel1 
 for igual a variavel2 } else { algo irá acontecer se a variavel1 for
 diferente da variavel2 }
 * 
 * if: nome do algoritmo
 * parenteses (): local onde se declaram os parametros ou expressao a ser 
 validada
 * chaves {}: bloco de código a aserem executados, ou seja, tudo que 
 estiver dentro do bloco de códigos será executado
 *else: "senao" é onde serao executados os codigos, que estiverem dentro 
 do bloco {}, caso a validacao do algoritmo "if" retorne falsa
 *
 *operadores lógicos:
 *
 * == serve para comparar se uma variavel/valor é igual a outra
 * !=serve para comparar se uma variavel/valor é diferente a outra
 * >serve para comparar se uma variavel/valor é maior a outra
 * <serve para comparar se uma variavel/valor é menor a outra
 * >=serve para comparar se uma variavel/valor é maior ou igual a outra
 * <=serve para comparar se uma variavel/valor é menor ou igual a outra
 * 
 * se "falso" : adicionar o ponto de exclamacao no inicio da declaracao de
 paramentros/expressao, por exemplo:
 * if (!variavel1 == variavel2) { bloco de código } aqui significa que:
 se a comparacao da variavel1 coma variavel2 reornar falso, os codigos 
 que estiverem dentro do bloco de codigo serao executados, nao havendo a 
 ncessidade do uso da clausula "else" 
*
* criar um validador onde voce ira declarar duas variaveis, 
cada uma com um valor diferente da outra, entao havera 
uma resposta diferente para cada situacao
*
* vamos criar dois inputs, onde cada input ira para cada umas das duas variaveis, 
ou seja:
* <input type="text" id="txtVar1" />
* <input type="text" id="txtVar2" />
*
* var txtVar1 = document.getElementbyId("textVar1");
* var txtVar2 = document.getElementbyId("textVar2");
*
* txtVar1.value que tem que ser comparado com o txtVar2.value
*
* enviar os dados vis console.log
*
 */
   function verificar () {
   const N = document.getElementById("N");
   const N2 = document.getElementById("N2");  

   if (N.value == N2.value ) {
    console.log(" São iguai !!")
   } else {
    console.log("São diferentes")
   }
   
}