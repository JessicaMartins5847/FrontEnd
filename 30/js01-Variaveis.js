//Aqui vamos aprender sobre variáveis em JvaScript.
//Em JavaScript, temos três formas principais de declarar variáveis;
// var let econst
// let: Declara uma variável que pode trocar o valor
// Cont: Não pode trocar o valor.
// Diferentes tipos de dados:
let numero = 99//numbers
let texto = "Olá, mundo!"
let booleano = true; // booleano (true ou false)
let indefinido; // Variável sem valor atribuído é "undefined"
// Typeof é um comando que mostra o tipo da variável
console.log(typeof indefinido)
// Não pode criar 2 variáveis com o mesmo nome se não vai dar erro
/*criar as seguintes variáveis
Uma com o nome de vocês 
Outra com a idade de vocês
Outra chamada souEstudante
Imprima usando console.log() cada uma dessa 
*/
let nome = "Jéssica"
let idade = 15
 let souEstudante = true;
  
 console.log( "Meu nome é", nome)
 console.log("Minha idade é", idade)
 console.log(souEstudante)


 //Abaixo imprimimos com mais facilidade//
 console.log(`Meu nome é ${nome}, minha idade é ${idade}, sou estudante? ${souEstudante}.`)

