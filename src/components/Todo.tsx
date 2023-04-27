import TodoCard from "./TodoCard"
import EditTodo from "./EditTodo";
import React, { useEffect,useContext } from "react";
import TodoType from "../classes/TodoType";
const Todo: React.FC<{ todo: TodoType }> = ({ todo }) => {
    
    return <>
        <TodoCard key={todo.id + "todocard"} todo={todo} />
        {todo.editOpen &&
        <EditTodo key={todo.id+"edit"} id={todo.id} done={todo.done} />
        }
    </>
}

export default Todo;