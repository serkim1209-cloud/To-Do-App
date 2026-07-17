import { useState } from "react";

function Task({
  id,
  taskClass,
  description,
  created,
  input,
  toggleCompleted,
  toggleEditing,
  deleteTask,
  newValue,
}) {
  const [value, setValue] = useState("");

  return (
    <li className={taskClass}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={taskClass === "completed"}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{created}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            toggleEditing(id);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => {
            deleteTask(id);
          }}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") if (value.trim() !== "") newValue(id, value);
        }}
      ></input>
    </li>
  );
}
export default Task;
