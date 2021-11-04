import React from 'react'

export const TodoCard = ({todo}) => {
    return (
        <div className="container">
            <h3>{todo.title}</h3>
            <p>{todo.content}</p> 
            <p>{todo.updatedAt}</p> 
        </div>
    )
}


