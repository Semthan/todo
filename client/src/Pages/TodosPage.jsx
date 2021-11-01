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

        </>
    )
}
