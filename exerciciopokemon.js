const pokemon = require('./pokemon')

function mostraDados() {
    console.log("Nome: " + pokemon.name[0].toUpperCase() + pokemon.name.substr(1, pokemon.name.length))
    console.log("Habilidade: " + pokemon.ability[0].toUpperCase() + pokemon.ability.substr(1, pokemon.ability.length))
}
function atributosPokemon() {
    var hp = pokemon.attributes.hp
    var atk = pokemon.attributes.attack
    var spATK = pokemon.attributes.specialAttack
    var def = pokemon.attributes.defense
    var spDEF = pokemon.attributes.specialDefense
    var speed = pokemon.attributes.speed

    return console.log("HP: " + hp + "\nATK: " + atk + " SpATK: " + spATK +
        "\nDEF: " + def + " SpDEF: " + spDEF + "\nSPEED: " + speed)
    /*    return console.log("HP: " + pokemon.attributes.hp + "\nATK: " +  pokemon.attributes.attack + 
     "  SpATK: " +  pokemon.attributes.specialAttack + "\nDEF: " + pokemon.attributes.defense +
     "  SpDEF: " +  pokemon.attributes.specialDefense + "\nSPEED: " + pokemon.attributes.speed)
 */
}
function imprimir() {
    return mostraDados(), 
    atributosPokemon()
}
imprimir()

/*
Função 1: Manipula uma string para deixar palavras ou letras maiusculas

Função linhaDeEvolucao: Mostra a linha de evolução com o pokemon atual em
letras maisculas

Função atributosPokemon: Mostra os atributos

Função ataquesPokemon: Mostra os ataques em ordem crescente com a primeira letra
de cada palavra em maiusculo

Função imprimirDados: Imprime as infos das outras funções na ordem requerida
*/