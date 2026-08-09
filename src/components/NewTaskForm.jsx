import PropTypes from "prop-types";
import { useState } from "react";

function NewTaskForm({ addTaskForm, inputRef, inputClick }) {
  const [value, setValue] = useState("");
  const inputValue = (e) => {
    setValue(e.target.value);
  };
  const keyDown = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      inputClick(e);
      addTaskForm(value);
      setValue("");
    } else if (e.key === "Escape") {
      setValue("");
      inputClick(e);
    }
  };
  return (
    <input
      ref={inputRef}
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={value}
      onChange={inputValue}
      onKeyDown={keyDown}
    />
  );
}
NewTaskForm.defaultProps={
  addTaskForm:()=>{}, 
  inputRef:()=>{}, 
  inputClick:()=>{}
}
NewTaskForm.propTypes={
   addTaskForm:PropTypes.func, 
  inputRef:PropTypes.func, 
  inputClick:PropTypes.func
}
export default NewTaskForm;
