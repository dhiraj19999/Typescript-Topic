import { useState } from "react"
import { Todo, TodoType } from "../constants"
import { addTodo } from "../api"



type TodoInputProps={
    onAdd:(todo:Todo)=>void
}

function TodoInput(props:TodoInputProps){

const {onAdd}=props
const [value,setValue]=useState <string>("")
const[type,setType]=useState<TodoType>(TodoType.Learning)

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
}
const handleType=(e:React.ChangeEvent<HTMLSelectElement> )=>{
  setType(e.target.value as TodoType)
const handleSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();
  let data=await addTodo(value,TodoType.Learned)
  onAdd(data)
}
    return (
        <div>
            <form onSubmit={handleSubmit}>  
<input onChange={handleChange}/>
<select onChange={handleType} value={type}>
<option value={TodoType.Learned}>Learning</option>
<option value={TodoType.Learning}>Learning</option>
<option value={TodoType.Revision}>Learning</option>
<option value={TodoType.Pending}>Learning</option>
</select>
<button type="submit">add</button>
</form>
        </div>
    )
}
}
export default TodoInput