export class Character {
    //atributos da nossa classe: aqui estão protegidos pelo private
   private name: string
   private movie: string
   private id: number
    // construtor que instancia novos objetos(instância)
    constructor(name:string, movie:string,id?:number){
        this.name = name
        this.movie = movie
        this.id = id || Date.now()
    }
    //getters e setters publicos, assim podemos acessar as propriedades!
    public getName():string{
        return this.name
    }

    public setName(newName:string){
        this.name = newName
    }


    public getId():number{
        return this.id
         
    }

    public setId(newId:number){
        this.id = newId
    }


    public getMovie():string{
        return this.movie
    }

    public setMovie(newMovie:string){
        this.movie = newMovie
    }


}