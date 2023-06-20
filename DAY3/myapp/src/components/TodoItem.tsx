import { Todo } from "../constants"

type todoItemProps=Todo
function TodoItem(prop:todoItemProps){

    return (
        <div>
{prop.message  } - {prop.likes}
        </div>
    )
}

export default TodoItem