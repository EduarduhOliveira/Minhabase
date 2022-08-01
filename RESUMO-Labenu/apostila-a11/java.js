/*OBJETOS
OBJETOS- São variáveis que recebem propriedades(qualidades, adjetivos), como por exemplo: carros (modelo, ano, marca,tipo e etc) 
Dentro de objetos teremos as propriedades e os valores: exemplo de carro 
propriedades = marca
valores = toyota
ficando assim em uma variavel 
const carro = {marca:(usar o dois pontos) "toyota"}
*cada propriedades é separada pro virgula ","
para acessar uma propriedade usamos o .chave
exemplo:*/
const carro = {marca: "toytoa",
ano:"2021",
classe: "sedan",
isFlex: "true" };
// const marcaCarro = carro.marca <== jeito 1 de ser feito
const marcaCarro = carro["marca"];//<== jeito dois
console.log(marcaCarro);
// para redefenir valores é digitar a chave que quer alterar com outro valor dentro:
carro.marca = "ford";
carro["isFlex"] = false;
console.log(carro);
// adicionando propriedades
carro.modelo = "corolla";
carro["quilometragem"] = 20000;
console.log(carro)
// criando uma cópia
const novoCarro = {carro, altura: "rebaixado"}
console.log(novoCarro)
/* OBJETOS DENTRO DE OBJETOS
** PODEMOS TER OBJETOS DENTRO DE ARRAYS E ARRAYS DENTRO DE OBJETOS E UM DENTRO DO OUTRA DOIDERA QUE SÓ
Vamos ao exemplo :*/
const paiDepet = {nome:"Eduardo Henrique", pet: { nome: "Luke",
raça: "lhasa",idade:3} ,};
const pet = paiDepet.pet;
console.log(pet);
const nomeDePet = paiDepet.pet.nome;
console.log(nomeDePet)
// usando arrays:
const curso = {nome: "noturno BARBOSA" , linguagens: ["JS", "CSS", "HTML"]};
const linguagens = curso.linguagens
console.log(linguagens);
const primeiraLinguagem = linguagens[0];
console.log(primeiraLinguagem)
