

export class Pokemon{
    public id:number;
    public name: string;

    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
        console.log('Constructor llamado');
    }
}

export const charmander = new Pokemon(4, 'Charmander');