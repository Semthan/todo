import React, {useEffect, useState} from 'react'
import {  getAllTodos } from '../fetches'
import { TodoCard } from '../Components/TodoCard'
import { Col, Container, Row } from 'react-bootstrap'

export const TodosPage = () => {

    const [Todos, setTodos] = useState([])
    

    useEffect(() => {
        getAllTodos().then((res) => setTodos(res.data))
        
        
    }, [])

    //console.log(Todos[0].title)

    return (
        <Container>
    {/*             {Todos.map((todo) => { 
                    return (
                        <div className="container">
                            <h3>{todo.title}</h3>
                            <p>{todo.content}</p> 
                            <p>{todo.updatedAt}</p> 
                        </div>
                    )           
                })} */}
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
