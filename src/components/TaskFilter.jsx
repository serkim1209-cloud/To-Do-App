import { useState } from "react";
import App from "../App";

function TaskFilter({ buttonActive, buttonCompleted, buttonAll, tasks }) {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={buttonAll}>
          All
        </button>
      </li>
      <li>
        <button onClick={buttonActive}>Active</button>
      </li>
      <li>
        <button onClick={buttonCompleted}>Completed</button>
      </li>
    </ul>
  );
}
export default TaskFilter;
