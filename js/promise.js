const fetchPokemons = new Promise((resolve, reject) => {
    const pokemons = fetch("https://pokeapi.co/api/v2/pokemon/");
    resolve(pokemons);
})

fetchPokemons
    .then(res => {
        return res.json();
    })
    .then(res => {
        const promiseDiv = document.getElementById("promise");
        res.results.forEach((pokemon, index) => {
            promiseDiv.innerHTML += `<div><b>${index + 1} - Name:</b> ${pokemon.name} <b>URL:</b> ${pokemon.url}<br/></div>`;
        })
    })
    .catch(error => {
        const promiseDiv = document.getElementById("promise");
        promiseDiv.innerHTML = error.message;
    })