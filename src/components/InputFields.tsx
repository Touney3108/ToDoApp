import React, { useState, useEffect, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Select from "./Select";
import classes from "./InputFields.module.css"
const InputFields= () => {
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const todosCtx = useContext(TodosContext);
  
  
  const setTitleHandler= (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const setDescriptionHandler= (event:React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }
  const setPriorityHandler= (value:string) => {
    setPriority(value);
  }
  useEffect(() => {
    if (title.length > 0 && description.length > 0 && priority !== "") {
      todosCtx.setInputData(title,description,priority,true)
  
    } else {
      todosCtx.setInputData(title,description,priority,false)
    }
    
  }, [title, description, priority])
  useEffect(() => {
    
      setTitle(todosCtx.inputData.title)
      setDescription(todosCtx.inputData.description)
      setPriority(todosCtx.inputData.priority)
    
  }, [todosCtx.editMode,todosCtx.todosList]);
 


  return <div className={classes.inputs}>
    <div >
      <label htmlFor="title">Title</label>
      <input id="title" type="text" value={title} className={classes.inputFields} onChange={setTitleHandler} />
    </div>
    <div >
      <label htmlFor="description">Description</label>
      <input id="description" type="text" value={description} className={classes.inputFields} onChange={setDescriptionHandler} />
    </div>
    <Select id="Priority" values={["", "High", "Mid", "Low"]} currentValue={priority} updateState={setPriorityHandler} />
  </div>
}

export default InputFields;