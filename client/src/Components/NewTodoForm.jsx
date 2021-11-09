import React, {useState} from 'react'
import { addTodo } from '../fetches';

export const NewTodoForm = () => {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const onSubmit = async e => {
        e.preventDefault();
        const payload = { title, content };
    
        await addTodo(payload)
    }

    const onChange = e => {
        if (e.target.name === "title") {
          setTitle(e.target.value);
        } else if (e.target.name === "content") {
          setContent(e.target.value);
        }
    }

    return (
        <>
        <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="New Todo"
          onChange={onChange}
        />
        <input type="textarea" name="content" id="content" onChange={onChange} />
        <input type="submit" value="Add new todo" />
      </form>
        </>
    )
}
