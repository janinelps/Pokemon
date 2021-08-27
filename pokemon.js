const pokemon = {

    name: "pikachu",
    types: ["eletric"],
    moves: [{
        name: "tackle",
        lv: 5
    }, {
        name: "thunderbolt",
        lv: 20
    }, {
        name: "thunder",
        lv: 50
    }, {
        name: "thunder wave",
        lv: 9
    }],
    ability: "static",
    preEvolution: "pichu",
    evolution: "raichu",
    attributes: {
        hp: 100,
        attack: 55,
        defense: 34,
        specialAttack: 100,
        specialDefense: 30,
        speed: 150
    }

}


/*

  criar uma função que receba a estrutura
  desse objeto acima e imprima na tela
  o seguinte template:
  
  Nome: Pikachu - Tipo: Eletrico
  Habilidade: Static
  
  Linha de evolução:
    Pichu >> PIKACHU >> Raichu
  
  Atributos:
  
    HP: 100
    ATK: 55 SpATK: 100
    DEF: 34 SpDEF: 30
    SPEED: 150
  
  Ataques:
    Lv 5 - Tackle
    Lv 9 - Thunder Wave
    Lv 20 - Thunderbolt
    Lv 50 - Thunder
*/