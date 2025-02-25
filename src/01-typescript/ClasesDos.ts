import axios from "axios";
import { PokeApiResponse } from "../02-interfaces/pokeapi-response.interface";

export class Pokemon{

    getImageUrl():string{
        return  `https://pokemon.com/${ this.id }.jpg`
    }

    constructor(
        public readonly id:number,
        public name:string,
        //public imageUrl: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

   /* async getMoves(){
       // const moves=10;

        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/1');

        console.log(data.moves);

        return data.moves;
    }*/

    async getMoves(){
        const {data} = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/1')
       
        console.log(data.game_indices)

        return data.game_indices

    }
}

export const bulbasur = new Pokemon(4, 'Bulbasur')

//console.log(bulbasur);

//bulbasur.scream()

//bulbasur.speak()

//console.log(bulbasur.getMoves())

bulbasur.getMoves();