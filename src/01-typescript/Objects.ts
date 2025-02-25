export const pokemonIds = [1,20,30,40,66];

pokemonIds.push(+'Julian Quimbayo')

//console.log(pokemonIds)

interface Pokemon{
    id: number,
    name: string,
    age?:number
}

export const pikachu:Pokemon={
    id:1,
    name: 'pikachu'
}

export const charmander:Pokemon={
    id:4,
    name:'charmander',
    age:1
}

export const pokemons: Pokemon[] = []

pokemons.push(charmander, pikachu)

console.log(pokemons)