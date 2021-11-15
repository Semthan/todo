import { useState, useEffect} from "react"
import { useHistory, useParams } from "react-router"
import { editTodo, getSingleTodo} from "../fetches"

export const EditTodoForm = () => {
    const { id } = useParams()

    let history = useHistory()

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getSingleTodo(id).then((res) => setTodos(res.data))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, content} = todos
        const payload = { title, content}
        
        await editTodo(payload,id)
        
        history.push('/todo')
    }

    const handleChange = (e) => {
        let newList = {...todos, [e.target.name]: e.target.value}
        setTodos(newList);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                placeholder=""
                value={todos?.title}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="content"
                placeholder=""
                value={todos?.content}
                onChange={handleChange}
            />            
            <button
                type="submit"
            >
                Edit
            </button>
        </form>
    )
}
