import { useState, useRef, useEffect } from "react";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import PropTypes from "prop-types";
function Task({
  id,
  completed,
  description,
  created,
  toggleCompleted,
  deleteTask,
  editedText,
}) {
  const inputClick = useRef(null);
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(description);
  const [timeAgo, setTimeAgo] = useState("");
  const [spanText, setSpanText] = useState("Created");
  const editOnclick = () => {
    setSpanText("Edited");
  };
  useEffect(() => {
    if (isEditing) {
      inputClick.current.focus();
    }
  }, [isEditing]);
  useEffect(() => {
    if (!created) return;
    const taskTime = () => {
      setTimeAgo(formatDistanceToNowStrict(created, { addSuffix: true }));
    };

    taskTime();

    const intervalTime = setInterval(taskTime, 1000);
    return () => clearInterval(intervalTime);
  }, [created]);
  let computedClass = "active";
  if (completed) computedClass = "completed";
  if (isEditing) computedClass = "editing";

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
          <span className="created">
            {spanText} {timeAgo}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            setEditing(!isEditing);
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
        ref={inputClick}
        type="text"
        className="edit"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" &&
            value.trim() !== "" &&
            value !== description
          ) {
            editedText(id, value);
            setEditing(false);
            editOnclick();
          } else if (e.key === "Escape" || e.key === "Enter") {
            setValue(description);
            setEditing(false);
          }
        }}
      ></input>
    </li>
  );
}
Task.defaultProps = {
  id: "",
  completed: false,
  description: "",
  created: null,
  toggleCompleted: () => {},
  deleteTask: () => {},
  editedText: () => {},
};
Task.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  description: PropTypes.string,
  created: PropTypes.string,
  toggleCompleted: PropTypes.func,
  deleteTask: PropTypes.func,
  editedText: PropTypes.func,
};
export default Task;
