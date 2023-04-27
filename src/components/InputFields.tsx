import React, { useState,useEffect } from "react";
import Select from "./Select";
import classes from "./InputFields.module.css"
const InputFields: React.FC<{
  isSubmitable: (valid: boolean) => void,
  updateData: (title: string, description: string, priority: string) => void,
  clearInputs:boolean
}> = ({ isSubmitable, updateData, clearInputs }) => {
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  
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
      isSubmitable(true);
      updateData(title,description,priority)
  
    } else {
      isSubmitable(false)
    }
    
  }, [title, description, priority])
  useEffect(() => {
    if (clearInputs) {
      setTitle("");
      setDescription("");
      setPriority("");
    }
  }, [clearInputs]);
 


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