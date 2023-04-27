import React, { useContext, useState} from "react";
import {TodosContext} from "../store/todos-context"
import Button from "./Button";
import classes from "./EditTodo.module.css";
const EditTodo: React.FC<{ id: string,done:boolean }> = ({ id,done }) => {
    const todosCtx = useContext(TodosContext);
    const [isChecked, setIsChecked] = useState(done);
    
    const changeChecked = () => {
        setIsChecked(prevChecked => !prevChecked);
    }

    const doneChangedHandler = () => {
        todosCtx.editDoneTodo(id,isChecked)
        
    }
    const deleteHandler = () => {
        todosCtx.removeTodo(id);
    }
    const buttonStyle = done ? "Disabled" : "";

    return <div className={classes.wrapper}>
        <Button btnType="Delete" btnStyle="" clickFunction={deleteHandler} />
        <div>
            <input id={id} type="checkbox" checked={isChecked} onChange={changeChecked} />
            <label htmlFor={id}>Done</label>
            <Button btnType="Update" btnStyle={buttonStyle} clickFunction={doneChangedHandler} />
        </div>
    </div>
}
export default EditTodo;