import axios from "axios"
import { baseUrl } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}

const getAllSubscribers = async (): Promise<user[]>  =>  {
  const subscribers = await axios.get(`${baseUrl}/subscribers`);
  return subscribers.data.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  });};

// Exercicio 4

// a) Função assincrona pq retorna uma Promise

const createNews = async (
  title: string,
  content: string,
  date: number
):Promise<void> => {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: date
  })
}

// a) 



// b) Sim, para garantir que o retorno da função será realmente o que foi declarado

// c)


const main = async (): Promise<void> => {
  try {
      const AllSubscribers = await getAllSubscribers()
  } catch (error: any) {
      const response = error.response.data || error.message
  }
}