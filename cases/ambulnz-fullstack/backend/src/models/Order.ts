export interface IOrderDB {
  id: string;
}

export interface IOrderItemDB {
  id: string;
  pizza_name: string;
  pizza_price: number;
  quantity: number;
  order_id: string;
}

export interface IOrderItem {
  id: string;
  pizza_name: string;
  price: number;
  quantity: number;
  order_id: string;
}

export class Order {
  private total: number = 0;
  constructor(private id: string, private itens: IOrderItem[]) {}

  // public getPizza = (): IPizzaOutputDTO => {
  //   return {
  //     name: this.name,
  //     price: this.price,
  //     ingredients: this.ingredients,
  //   };
  // };

  public calculateTotal = (): number => {
    for (const item of this.itens) {
      this.total = this.total + item.price * item.quantity;
    }

    return this.total;
  };

  public getTotal = () => this.total;

  public getId = () => this.id;

  public setId = (newId: string) => (this.id = newId);

  public setItens = (newItens: IOrderItem[]) => {
    this.itens = newItens;
    this.calculateTotal();
  };

  public addItem = (newItem: IOrderItem) => {
    this.itens.push(newItem);
    this.calculateTotal();
  };

  public removeItem = (itemToRemove: IOrderItem) => {
    this.itens = this.itens.filter((item) => item !== itemToRemove);
    this.calculateTotal();
  };
}
