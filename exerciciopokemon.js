const pokemon = require('./pokemon')
const util = require('./util')

let dadosImpressao = '';

function mostraDados() {
    dadosImpressao += "Nome: ".concat(util.primeraMaiuscula(pokemon.name))
    dadosImpressao += " - Tipo: ".concat(pokemon.types.map(tipo => util.primeraMaiuscula(tipo).toString()))
    dadosImpressao += "\nHabilidade: ".concat(util.primeraMaiuscula(pokemon.ability))
    dadosImpressao += "\n\n"
    dadosImpressao += "Linha de evolução: \n"

    if (!util.isNullOrEmpty(pokemon.preEvolution)) {
        dadosImpressao += util.primeraMaiuscula(pokemon.preEvolution);
        dadosImpressao += " >> ";
    }

    dadosImpressao += pokemon.name.toUpperCase();

    if (!util.isNullOrEmpty(pokemon.evolution)) {
        dadosImpressao += " >> ".concat(util.primeraMaiuscula(pokemon.evolution));
    }
    dadosImpressao += '\n\n\r'

}

function linhaDeEvolucao() {
    //var linhaEvol1 = pokemon.preEvolution
    //var linhaEvol2 = pokemon.name
    //var linhaEvol3 = pokemon.evolution

    if (!util.isNullOrEmpty(pokemon.preEvolution)) {
        dadosImpressao += util.primeraMaiuscula(pokemon.preEvolution);
        dadosImpressao += " >> ";

    }
    dadosImpressao += pokemon.name.toUpperCase();

    if (!util.isNullOrEmpty(pokemon.evolution)) {
        dadosImpressao += " >> ".concat(util.primeraMaiuscula(pokemon.evolution));
    }
    dadosImpressao += '\n\r'


    /*if (linhaEvol1 != null && linhaEvol3 != null) {
        dadosImpressao += linhaEvol1[0].toUpperCase().substr(1, linhaEvol1.length) + " >> " + linhaEvol2.toUpperCase() + " >> " + linhaEvol3[0].toUpperCase().substr(1, linhaEvol3.length)
            //}

        if(pokemon.preEvolution != null && pokemon.evolution != null){
            pokemon.nameto.UpperCase()
        } else if */
}

function atributosPokemon() {
    dadosImpressao += 'Atributos: \n '
    var hp = pokemon.attributes.hp
    var atk = pokemon.attributes.attack
    var spATK = pokemon.attributes.specialAttack
    var def = pokemon.attributes.defense
    var spDEF = pokemon.attributes.specialDefense
    var speed = pokemon.attributes.speed

    dadosImpressao += "HP: " + hp + "\nATK: " + atk + " SpATK: " + spATK +
        "\nDEF: " + def + " SpDEF: " + spDEF + "\nSPEED: " + speed
        /*    return console.log("HP: " + pokemon.attributes.hp + "\nATK: " +  pokemon.attributes.attack + 
         "  SpATK: " +  pokemon.attributes.specialAttack + "\nDEF: " + pokemon.attributes.defense +
         "  SpDEF: " +  pokemon.attributes.specialDefense + "\nSPEED: " + pokemon.attributes.speed)
        */
}

function imprimir() {
    mostraDados();
    // linhaDeEvolucao(),
    atributosPokemon();
    console.log(dadosImpressao);

}
imprimir()

/*
Função 1: Manipula uma string para deixar palavras ou letras maiusculas

Função atributosPokemon: Mostra os atributos

Função ataquesPokemon: Mostra os ataques em ordem crescente com a primeira letra
de cada palavra em maiusculo

Função imprimirDados: Imprime as infos das outras funções na ordem requerida
*/