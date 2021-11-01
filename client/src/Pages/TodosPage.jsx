import React, {useEffect, useState} from 'react'
import {  getAllTodos } from '../fetches'

export const TodosPage = () => {

    const [Todos, setTodos] = useState([])
    

    useEffect(() => {
        getAllTodos().then((res) => setTodos(res.data))
        
        
    }, [])

    //console.log(Todos[0].title)

    return (
        <>
            {Todos.map((todo) => { 
                return (
                    <>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p> 
                    <p>{todo.updatedAt}</p> 
                    </>
                )           
            })}
        </>
    )
}
