import { useState } from "react";

function NewTaskForm({ addTaskForm }) {
  const [value, setValue] = useState("");
  const inputValue = (e) => {
    setValue(e.target.value);
  };
  const keyDown =(e)=>{
    if(e.key === "Enter"&& value.trim()!==""){
      addTaskForm(value)
      setValue("")
    }
  }
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={value}
      onChange={inputValue}
      onKeyDown={keyDown}
    />
  );
}
export default NewTaskForm;
