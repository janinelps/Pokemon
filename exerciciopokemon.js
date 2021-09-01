const pokemon = require('./pokemon');
const util = require('./util')
//Importa os arquivos de pokemon.js para serem consumidos pelas function
//Importa util.js onde encontram-se as function para checagem de conteúdo do array
//e de padronização do array
let dadosImpressao = '';
//variável para ser preenchida quando necessário
function mostraDados() {
    dadosImpressao += "Nome: " + util.primeraMaiuscula(pokemon.name)
    dadosImpressao += " - Tipo: " + pokemon.types.map(tipo => util.primeraMaiuscula(tipo).toString())
    dadosImpressao += "\nHabilidade: " + util.primeraMaiuscula(pokemon.ability)
}

function linhaDeEvolucao() {
    //var linhaEvol1 = pokemon.preEvolution
    //var linhaEvol2 = pokemon.name
    //var linhaEvol3 = pokemon.evolution
    dadosImpressao += "\n\nLinha de evolução: \n"

    if (!util.isNullOrEmpty(pokemon.preEvolution)) {
        dadosImpressao += util.primeraMaiuscula(pokemon.preEvolution);
        dadosImpressao += " >> ";

    }
    dadosImpressao += pokemon.name.toUpperCase();

    if (!util.isNullOrEmpty(pokemon.evolution)) {
        dadosImpressao += " >> " + util.primeraMaiuscula(pokemon.evolution);
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
    dadosImpressao +=  `
Atributos:

    HP: ${pokemon.attributes.hp} 
    ATK: ${pokemon.attributes.attack}  SpATK: ${pokemon.attributes.specialAttack} 
    DEF: ${pokemon.attributes.defense}  SpDEF: ${pokemon.attributes.specialDefense} 
    SPEED: ${pokemon.attributes.speed}
`
    /*    return console.log("HP: " + pokemon.attributes.hp + "\nATK: " +  pokemon.attributes.attack + 
     "  SpATK: " +  pokemon.attributes.specialAttack + "\nDEF: " + pokemon.attributes.defense +
     "  SpDEF: " +  pokemon.attributes.specialDefense + "\nSPEED: " + pokemon.attributes.speed)
    */
}

function ataquesPokemon() {
    const lvlAtaques = pokemon.moves.map(ar => ar.lv)
    const ordemlvlAtaques = lvlAtaques.sort((numero1, numero2) => (numero1 - numero2))
    new Set(ordemlvlAtaques)
    dadosImpressao += "\nAtaques: \n"
    for (const iterator of ordemlvlAtaques) {
        const nomesAtaques = pokemon.moves.filter(a => a.lv == iterator)
        nomesAtaques.forEach(ataque => {
        dadosImpressao += "Lv ".concat(ataque.lv," - ", util.primeraMaiuscula(ataque.name))
        dadosImpressao += "\n"});
    }
}

function imprimir() {
    mostraDados();
    linhaDeEvolucao(),
    atributosPokemon(), 
        ataquesPokemon(),
        console.log(dadosImpressao)

}
imprimir()

/*
Função 1: Manipula uma string para deixar palavras ou letras maiusculas

Função atributosPokemon: Mostra os atributos

Função ataquesPokemon: Mostra os ataques em ordem crescente com a primeira letra
de cada palavra em maiusculo

Função imprimirDados: Imprime as infos das outras funções na ordem requerida
*/