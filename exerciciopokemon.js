const pokemon = require('./pokemon')

function mostraDados() {
console.log("Nome: " + pokemon.name[0].toUpperCase() + pokemon.name.substr(1, pokemon.name.length))
console.log("Habilidade: " + pokemon.ability[0].toUpperCase() + pokemon.ability.substr(1, pokemon.ability.length))
}


/*
Função 1: Manipula uma string para deixar palavras ou letras maiusculas

Função linhaDeEvolucao: Mostra a linha de evolução com o pokemon atual em
letras maisculas

Função atributosPokemon: Mostra os atributos

Função ataquesPokemon: Mostra os ataques em ordem crescente com a primeira letra
de cada palavra em maiusculo

Função imprimirDados: Imprime as infos das outras funções na ordem requerida
*/