import axios from "axios"
import { baseUrl } from "./baseURL"

// Exercicio 1

// a) GET /subscribers

// b) Promise<any[]>

// c) 

async function getAllSubscribers(): Promise<any[]> {
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