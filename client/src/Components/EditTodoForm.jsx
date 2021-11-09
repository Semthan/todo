import { useState} from "react"
import { useHistory, useParams } from "react-router"
import { editTodo} from "../fetches"

export const EditTodoForm = () => {
    const { id } = useParams()

    let history = useHistory()

    const [formValue,setFormValue ] = useState ({
        title:"",
        content: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, content} = formValue
        const payload = { title, content}
        console.log(payload)
        
        await editTodo(payload,id)
        
        history.push('/todo')
    }

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name] : event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                placeholder=""
                value={formValue.title}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="content"
                placeholder=""
                value={formValue.content}
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
