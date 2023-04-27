import {useContext} from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "./Todo";
import classes from "./TodosList.module.css"


const TodosList = () => {
    const todosCtx = useContext(TodosContext);

    const showHigh = todosCtx.todosList.map(todo => todo.priority === "High" && <Todo key={todo.id + "todo"} todo={todo} />);
    const showMid = todosCtx.todosList.map(todo => todo.priority === "Mid" && <Todo key={todo.id + "todo"} todo={todo} />);
    const showLow = todosCtx.todosList.map(todo => todo.priority === "Low" && <Todo key={todo.id + "todo"} todo={todo} />);

    const highToLow = [showHigh, showMid, showLow];

    return <div className={classes.todos}>
        {todosCtx.display === "All" && todosCtx.order === "High to low"&&highToLow.map(el=>el)}
        {todosCtx.display === "All" && todosCtx.order === "Low to high" && highToLow.reverse().map(el => el)}
        {todosCtx.display === "High" && showHigh}
        {todosCtx.display === "Mid" && showMid}
        {todosCtx.display === "Low" && showLow}
    </div>
}

export default TodosList;