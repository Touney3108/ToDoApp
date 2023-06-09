import { useState,useContext } from "react";
import InputFields from "../components/InputFields";
import Button from "../components/Button";
import Select from "../components/Select";
import classes from "./InputLayout.module.css"
import { TodosContext } from "../store/todos-context";

const InputLayout = () => {
    const { submitTodo,setConfiguration,inputData } = useContext(TodosContext);
    const [newOrder, setNewOrder] = useState("High to low");
    const [newDisplay, setNewDisplay] = useState("All");
    const [configOpen, setConfigOpen] = useState(false);

    
    
   
    const setOrderHandler = (value: string) => {
        if (value === "High to low" || value === "Low to high") {
            setNewOrder(value);
        }
    }
    const setDisplayHandler = (value: string) => {
        if (value === "All" || value === "High" || value === "Mid" || value === "Low") {
            setNewDisplay(value)
        }
    }
    
    const submitStyle = inputData.submitable ? "SubmitAllowed" : "";
    const addTodoHandler = () => {
        if (inputData.submitable) {
            submitTodo();
        }
    }
    const setConfigurationHandler = () => {
        if (configOpen) {
            
            setConfiguration(newOrder, newDisplay);
            setConfigOpen(false);
            
        } else {
            setConfigOpen(true);
        }
    }

    return <>
        <div className={classes.inputFields}>
            <InputFields />
        </div>
        <div className={classes.menu}>
            <Button btnType="Submit" btnStyle={submitStyle} clickFunction={addTodoHandler} />
            <Button btnType="Configuration" btnStyle="" clickFunction={setConfigurationHandler} />
            {configOpen && <>
                <Select id="Order" values={["High to low", "Low to high"]} currentValue={newOrder} updateState={setOrderHandler} />
                <Select id="Display" values={["All", "High", "Mid", "Low"]} currentValue={newDisplay} updateState={setDisplayHandler} />
            </>}
        </div>
    </>
}

export default InputLayout;