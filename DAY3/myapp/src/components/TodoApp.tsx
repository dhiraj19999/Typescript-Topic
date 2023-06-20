
import { getTodos } from "../api"
import { useEffect,useState } from "react"
import TodoItem from "./TodoItem"
import { Todo } from "../constants"
import TodoInput from "./TodoInput"
function TodoApp(){

const [todos,setTodos]=useState <Todo[]>([])
useEffect(()=>{
getTodos().then((d)=>{
    setTodos(d)
})
},[])


const onAdd=(todo:Todo)=>{
    setTodos([...todos,todo])
}
    return (


        <div>
{
    todos.map((el)=>(
        
          <TodoItem key={el.id} {...el}/>
      
    )

    )
}
<TodoInput onAdd={onAdd}/>
        </div>
    )
}
export default TodoApp