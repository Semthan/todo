import axios from "axios";

const url = axios.create({
    baseURL: process.env.API_KEY || 'http://localhost:5000'
})


export const getAllTodos = () => url.get('/todo')
export const getSingleTodo = () => url.get('/todo/:id')
export const addTodo = () => url.post('/todo/add')
export const editTodo = (payload, id) => url.post(`/todo/${id}`, payload)
export const deleteSingleTodo = (id) => url.delete(`/todo/${id}`)