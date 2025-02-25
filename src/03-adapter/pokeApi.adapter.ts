import axios from "axios";

export class pokeApiAdapter{
    private readonly axiosVar = axios;

    //Obtener los datos de la base de datos
    async get(url:string){
        const{data}= await this.axiosVar.get(url)
        return(data)
    }

    //Actualizar los datos url - data
    async patch(url:string, data:string){
        
    }

    //Eliminar los datos url - data
    async delete(url:string){
        
    }

    //Insertarlos datos url - data
    async post(url:string, data:string){
        
    }


}