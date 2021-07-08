function achaPokemon() {

    pokemonAPI = parseInt(Math.random() * 878) 
    $.get('https://pokeapi.co/api/v2/pokemon/'+pokemonAPI,(dado) => { 
  
    document.querySelector("#info1").innerText = `nome: ${dado.name}`
    document.querySelector("#info2").innerText = `abilidade: ${dado.abilities[0].ability.name}`;
    document.querySelector("#info3").innerText  = `tipo: ${dado.types[0].type.name}`
    })  
};





