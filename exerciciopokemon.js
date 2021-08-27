const { ability } = require('./pokemon')
const pikachu = require('./pokemon')

console.log("Habilidade: "+ pikachu.ability[0].toUpperCase()+ability.substr(1,ability.length))

/*
Função 1: Manipula uma string para deixar palavras ou letras maiusculas

Função linhaDeEvolucao: Mostra a linha de evolução com o pokemon atual em
letras maisculas

Função atributosPokemon: Mostra os atributos

Função ataquesPokemon: Mostra os ataques em ordem crescente com a primeira letra
de cada palavra em maiusculo

Função imprimirDados: Imprime as infos das outras funções na ordem requerida
*/