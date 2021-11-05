import React, { useState } from 'react'
import { Card, Col, Button, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const TodoCard = ({todo}) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
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
                <Link to={`/todo/${todo._id}`}><Button onClick={handleShow}>Edit</Button></Link>
                </Card.Footer>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{todo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {todo.content}
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


