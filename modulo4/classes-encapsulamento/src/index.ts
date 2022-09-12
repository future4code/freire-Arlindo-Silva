// Exercicio 1

// a) Para executar as ações ao criar uma instância
//    constructor(){}

class Transaction {
  private description: string
  private value: number
  private date: string

  constructor(
    description: string,
    value: number,
    date: string
    ){
      this.description = description
      this.value = value
      this.date = date 
  }

  public getDescription() {
    return this.description
  }
  public getValue() {
    return this.value
  }
  public getDate() {
    return this.date
  }

}


class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
  public getCpf() {
    return this.cpf
  }
  public getName() {
    return this.name
  }
  public getAge() {
    return this.age
  }
  public getBalance() {
    return this.balance
  }
  public getTransactions() {
    return this.transactions
  }
  public setTransaction(transaction: Transaction) {
    this.transactions = [
      ...this.transactions, transaction
    ]
  }
}

const user1:UserAccount = new UserAccount
            ("01747587498",
            "Pedro",20)

// b) A mensagem é impressa apenas uma vez

// c) Usando a keyword this dentro da propria classe

// Exercicio 2

// linha 6

const transaction1: Transaction = new Transaction(
  "Pagamento boleto", 500, "05/09/2022"
)

user1.setTransaction(transaction1)

// Exercicio 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}