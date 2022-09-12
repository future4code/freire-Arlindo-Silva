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

// b)

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

const main = async (): Promise<void> => {
  try {
      const AllSubscribers = await getAllSubscribers()
      await createNews('Rony Pop em #1', 'Artista brasileiro debuta em #1 em todas as paradas', 102458710)
  } catch (error: any) {
      const response = error.response.data || error.message
  }
}

main()