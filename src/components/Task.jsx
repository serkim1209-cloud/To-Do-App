import { useState } from "react";

function Task({
  id,
  editing,
  completed,
  description,
  created,
  toggleCompleted,
  toggleEditing,
  deleteTask,
  editedText,
  tasks,
}) {
  const [value, setValue] = useState(description);
  let computedClass = "active";
  if (completed) computedClass = "completed";
  if (editing) computedClass = "editing";
  return (
    <li className={computedClass}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
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
          if (e.key === "Enter")
            if (value.trim() !== "") {
              editedText(id, value);
            }
        }}
      ></input>
    </li>
  );
}
export default Task;
