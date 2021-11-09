import React, {useEffect, useState} from 'react'
import {  getAllTodos } from '../fetches'
import { TodoCard } from '../Components/TodoCard'
import { Container, Row } from 'react-bootstrap'
import { NewTodoForm } from '../Components/NewTodoForm'

export const TodosPage = () => {

    const [Todos, setTodos] = useState([""])
    

    useEffect(() => {
        getAllTodos().then((res) => setTodos(res.data))
    }, [{}])

    return (
        <Container>
            <NewTodoForm></NewTodoForm>
            <Row xs={1} md={4} className='g-4'>          
                    {!Todos && <p> loading...</p> }
                        {Todos && Object.entries(Todos).map(item => {
                        const key = item[0]
                        const value = item[1]
                        return <TodoCard key = {key} todo={value}/>  
                    })}        
            </Row>
        </Container>
    )
}
