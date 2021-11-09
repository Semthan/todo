import React, { useState} from 'react'
import { Card, Col, Button, Modal} from 'react-bootstrap'
import { Link, useHistory} from 'react-router-dom'
import { deleteSingleTodo } from '../fetches'
import { EditTodoForm } from './EditTodoForm'

export const TodoCard = ({todo}) => {

    const [show, setShow] = useState(false)
    let history = useHistory()

    function handleClose() {
        history.push("/todo")
        setShow(false)
    }

    function handleDelete() {
        deleteSingleTodo(todo._id)
    }

    {/* code for modal under development */}
    const handleShow = () => setShow(true)

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
                <Link to={`/todo/edit/${todo._id}`}><Button>Edit</Button></Link>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Card.Footer>
            </Card>

            {/* code for modal under development */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{todo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {todo.content}
                    <EditTodoForm></EditTodoForm>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
            </Modal>
        </Col>

    )
}


