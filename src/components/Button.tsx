import React from "react";

import classes from "./Button.module.css"
const Button: React.FC<{ btnType: string,btnStyle:string, clickFunction: () => void }>= ({btnType,btnStyle="",clickFunction}) => {
    let btnClass = classes.button;
    if (btnType === "Submit") btnClass += " " + classes.submit;
    else if (btnType === "Configuration") btnClass += " " + classes.configuration;
    else if (btnType === "Update") btnClass += " " + classes.update;
    else if (btnType === "Delete") btnClass += " " + classes.delete;
    else if (btnType === "Delete") btnClass += " " + classes.delete;
    
    if (btnStyle === "Disabled") btnClass += " " + classes.disabledUpdate;
    else if (btnStyle === "SubmitAllowed") btnClass += " " + classes.submitAllowed;
    
    
    return <button className={btnClass} onClick={clickFunction}>{btnType}</button>
}

export default Button;