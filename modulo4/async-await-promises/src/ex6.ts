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

// Exercicio 6

// a) Recebe um array de promises e devolve uma promise

// b) Otimização das requisições

const notificateAllUsers = async (
  users: user[],
  message: string
): Promise<void> => {

	try {
	  const promises = users.map(user =>{
	    return axios.post(`${baseUrl}/notifications`, {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	
	  await Promise.all(promises);

	} catch {
		console.log("Error");
	}
};

const main = async (): Promise<void> => {
  try {
      const AllSubscribers = await getAllSubscribers()
      await createNews('Rony Pop em #1', 'Artista brasileiro debuta em #1 em todas as paradas', 102458710)
      await notificateAllUsers(AllSubscribers, 'Rony is the best')
    } catch (error: any) {
      const response = error.response.data || error.message
  }
}

main()