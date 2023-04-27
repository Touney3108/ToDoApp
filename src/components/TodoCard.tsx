import React, { useContext } from "react";
import TodoType from "../classes/TodoType";
import {ReactComponent as EditIcon} from "../images/edit-button-svgrepo-com.svg";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoCard.module.css";
const TodoCard: React.FC<{ todo: TodoType }> = ({ todo }) => {
    const {editOpen}=useContext(TodosContext)
    let cardClass = classes.card;
    if (todo.done) {
        cardClass += " " + classes.done;
    }

    const editOpenHandler = () => {
        editOpen(todo.id);
    }
    return <div className={cardClass}>
        <div>
            <h5 className={classes.title}>{todo.title}</h5>
            <p className={classes.description}>{todo.description}</p>
        </div>
        <div className={classes.badgeWrapper}>
            <div className={classes.priority}>{todo.priority}</div>
            <div className={classes.logoWrapper}>
                <div className={classes.logo} onClick={editOpenHandler}><EditIcon /></div>
            </div>
        </div>
    </div>
}

export default TodoCard;