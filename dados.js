/****************************
 * 
 * Name: Estudos JavaScript
 * Author: Rayane Tenório
 * E-mail: tenoriosrayane@gmail.com
 * Date: 2021-08-26
 * Location: https://github.com/rayanetenorios/estudosJavaScript
 * 
*****************************/



// Variáveis
let preco = 19.90;
let desconto = 0.4;

// Exibição de preço com desconto
let precoComDesconto = preco * (1 - desconto); //exemplo de expressão válida
console.log(precoComDesconto);

//Concatenação de strings (textos) com variáveis
let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome 
    + ", Categoria: " + categoria
    + ", Preço: R$" + precoComDesconto);


// Tipos de dados
let idade = 31; // number
console.log(typeof 31);
console.log(typeof idade);

let salario = 4578.32; // js não diferencia inteiro de real
console.log(typeof salario);

let estaChovendo = true; // bolean (verdadeiro ou falso)
console.log(typeof estaChovendo);

console.log(typeof "Teste"); // string



