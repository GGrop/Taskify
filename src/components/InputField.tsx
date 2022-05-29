import React, { useRef } from 'react'
import "./styles.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    HandleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<Props>= ({todo,setTodo, HandleAdd}) => {

    const inputRef = useRef(null);

    return (
        <form className="input" onSubmit={(e)=>HandleAdd(e)}>
            <input
                type="input"
                placeholder="Enter a task"
                className='inputBox'
                value={todo}
                onChange={
                    (e)=>setTodo(e.target.value)
                }
            />
            <button type='submit' className='inputSubmit'>GO</button>
        </form>
    )
}

export default InputField