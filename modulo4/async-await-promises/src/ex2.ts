import axios from "axios"
import { baseUrl } from "./baseURL"

// Exercicio 2

// a)   uma função nomeada usa o function e o async vem logo no inicio da sintaxe
//      Já a arrow function é declarada como variavel e p async vem logo após o sinal de =

// b)

const getAllSubscribers = async (): Promise<any[]>  =>  {
    const subscribers = await axios.get(`${baseUrl}/subscribers`);
    return subscribers.data;
};

const main = async (): Promise<void> => {
    try {
        const AllSubscribers = await getAllSubscribers()
    } catch (error: any) {
        const response = error.response.data || error.message
    }
}