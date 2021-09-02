const pokemon = require('./pokemon');
const util = require('./util')
//Importa os arquivos de pokemon.js para serem consumidos pelas function
//Importa util.js onde encontram-se as function para checagem de conteúdo do array
//e de padronização do array
let dadosImpressao = '';
//variável para ser preenchida quando necessário

function mostraDados() {
    dadosImpressao += `
Nome: ${util.primeraMaiuscula(pokemon.name)} - Tipo: ${pokemon.types.map(tipo => util.primeraMaiuscula(tipo)).join(' / ')}
Habilidade: ${util.primeraMaiuscula(pokemon.ability)}`
}

function linhaDeEvolucao() {

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

}

function atributosPokemon() {
    dadosImpressao +=  `
Atributos:

    HP: ${pokemon.attributes.hp} 
    ATK: ${pokemon.attributes.attack}  SpATK: ${pokemon.attributes.specialAttack} 
    DEF: ${pokemon.attributes.defense}  SpDEF: ${pokemon.attributes.specialDefense} 
    SPEED: ${pokemon.attributes.speed}
`
}

function ataquesPokemon() {
    const lvlAtaques = pokemon.moves.map(arrayLv => arrayLv.lv)
    const ordemlvlAtaques = lvlAtaques.sort((numero1, numero2) => (numero1 - numero2))
    dadosImpressao += "\nAtaques: \n"
    
    for (const iterator of ordemlvlAtaques) {
        const nomesAtaques = pokemon.moves.filter(a => a.lv == iterator)
        nomesAtaques.forEach(ataque => {
        dadosImpressao += `Lv ${ataque.lv} - ${util.primeraMaiuscula(ataque.name)}
`
        });
    }
}

function imprimir() {
    mostraDados();
    linhaDeEvolucao();
    atributosPokemon();
    ataquesPokemon()
    console.log(dadosImpressao)

}
imprimir()