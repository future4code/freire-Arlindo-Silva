import axios from "axios"
import { baseUrl } from "./baseURL"

// Exercicio 3

type user = {
	id: string;
	name: string;
	email: string;
}

// a) Não

// b) Sim, para garantir que o retorno da função será realmente o que foi declarado

// c)

const getAllSubscribers = async (): Promise<user[]>  =>  {
    const subscribers = await axios.get(`${baseUrl}/subscribers`);
    return subscribers.data.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });};

const main = async (): Promise<void> => {
  try {
      const AllSubscribers = await getAllSubscribers()
  } catch (error: any) {
      const response = error.response.data || error.message
  }
}