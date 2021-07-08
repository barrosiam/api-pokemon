function achaPokemon() {

    pokemonAPI = parseInt(Math.random() * 878) 
    $.get('https://pokeapi.co/api/v2/pokemon/'+pokemonAPI,(dado) => { 
  
    document.querySelector("#info1").innerText = `Nome: ${dado.name}`
    document.querySelector("#info2").innerText = `Abilidade: ${dado.abilities[0].ability.name}`;
    document.querySelector("#info3").innerText  = `Tipo: ${dado.types[0].type.name}`
    })  
};





