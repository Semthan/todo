import { useState } from "react"
import { useHistory } from "react-router"
import { editTodo,  } from "../fetches"

export const EditTodoForm = ({todo}) => {
    let history = useHistory()

    const [formValue,setFormValue ] = useState ({
        title:"",
        content: ''
    })

    const handleSubmit = async () => {

        const { title, content} = formValue
        const payload = { title, content}
        console.log(payload)
        
        try{
            await editTodo(payload)
           
            history.push('/todo')
        }catch (error){
            console.log(error); 
        }
    }

    

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name] : event.target.value
        })
    }

    return (
        <form >
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
                type="button" onClick={handleSubmit}
            >
                Edit
            </button>
        </form>
    )
}
