import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const TodoCard = ({todo}) => {
    return (
        <Col>
            <Card>
                <Card.Header as="h5">{todo.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                       {todo.content}
                    </Card.Text> 
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated {todo.updatedAt}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}


