
import axios,{AxiosResponse} from 'axios'

import { TodoType } from './constants'
import { Todo } from './constants'

export const getTodos= async()=>{

    let response:AxiosResponse<Todo[]>= await axios.get("http://localhost:3000/todos")

    return  response.data
}

export const updateTodo=async(changeTodo:Todo):Promise<Todo>=>{

    let response:AxiosResponse<Todo>= await axios.patch(`http://localhost:3000/todos/${changeTodo.id}`,
   
    {
       ...changeTodo
    }
   
    )

    return  response.data
}

export const addTodo= async(message:string,type:TodoType):Promise<Todo>=>{
    let response:AxiosResponse<Todo>= await axios.post("http://localhost:3000/todos",
   
    {
      message,
      type,
      likes:0
    }
   
    )

    return  response.data
}