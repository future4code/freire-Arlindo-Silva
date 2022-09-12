export class Carro {
    private cor: string
    private modelo:string
    private tanque:number
   
    constructor(cor:string,modelo:string, tanque:number){
        this.cor = cor
        this.modelo = modelo
        this.tanque = tanque
    }
    public getCor():string{
        return this.cor
    }
    public setCor(novaCor:string):void{
        this.cor = novaCor
    }

    public getModelo():string{
        return this.modelo
    }
    public setModelo(novoModelo:string){
        this.modelo = novoModelo
    }

    public getTanque():number{
        return this.tanque
    }
    public setTanque(novoValorParaTanque:number){
        this.tanque = novoValorParaTanque
    }

   public acelerar():void{
        this.tanque = (this.tanque - 0.2)
    }
   public abastecer(litros:number):void{
        this.tanque = this.tanque + litros
    }

}



