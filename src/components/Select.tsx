import React from "react";

const Select: React.FC<{ id: string, values: string[],currentValue:string,updateState:(value:string)=>void }> = ({ id, values,currentValue,updateState }) => {
    const updateStateHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateState(event.target.value)
    }
    return <div>
        <label htmlFor={id}>{id}</label>
        <select id={id} onChange={updateStateHandler} value={currentValue}>
            {values.map(optionValue => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
        </select>
    </div>
}
export default Select;