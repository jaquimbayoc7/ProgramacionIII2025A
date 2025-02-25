import axios from "axios";
import { pokeApiAdapter } from "../03-adapter/pokeApi.adapter";
import { Move, PokeApiResponse } from "../02-interfaces/pokeapi-response.interface";

export class PokemonAdapter{

    constructor(
        public readonly id:number,
        public name:string,
        //Inyección de dependencias
        private readonly http:pokeApiAdapter
    ){}

    async getMoves():Promise<Move[]>{
        //const {data} = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/1')
       const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/1')
        
        console.log(data.moves)

        return data.moves
    }
}

const pokeApi = new pokeApiAdapter();

export const bulbasur = new PokemonAdapter(4, 'Bulbasur', pokeApi)
