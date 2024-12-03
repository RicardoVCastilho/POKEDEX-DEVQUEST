const pokemonSelectionList = document.querySelectorAll('.pokemon');
const pokemonCards = document.querySelectorAll('.pokemon-card');

pokemonSelectionList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const pokemonOpenCard = document.querySelector('.open');
        pokemonOpenCard.classList.remove('open');

        const pokemonSelectedById = pokemon.attributes.id.value;

        const pokemonIdCardSetToOpen = pokemonSelectedById + '-card';
        const pokemonCardSetToOpen = document.getElementById(pokemonIdCardSetToOpen);
        pokemonCardSetToOpen.classList.add('open');

        const activeListPokemon = document.querySelector('.active');
        activeListPokemon.classList.remove('active');

        const selectedListPokemon = document.getElementById(pokemonSelectedById);
        selectedListPokemon.classList.add('active')
    });
});