import axios from "axios";

//local
/* const url = axios.create({
    baseURL: process.env.API_KEY ||  'http://localhost:3000'
})
 */
axios.defaults.withCredentials = true;

const url = axios.create({
    baseURL: process.env.API_KEY || 'https://semthan-todo.herokuapp.com/'
});


export const getAllTodos = () => url.get('/todo')
export const getSingleTodo = (id) => url.get(`/todo/${id}`)
export const addTodo = (payload) => url.post('/todo/add', payload)
export const editTodo = (payload, id) => url.post(`/todo/${id}`, payload)
export const deleteSingleTodo = (id) => url.delete(`/todo/${id}`)