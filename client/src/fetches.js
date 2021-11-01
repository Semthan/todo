import axios from "axios";

const url = axios.create({
    baseURL: process.env.API_KEY || 'http://localhost:5000'
})


export const getAllTodos = () => url.get('/todo')