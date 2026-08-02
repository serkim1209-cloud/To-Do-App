import TaskFilter from "./TaskFilter";
import App from "../App";
function Footer({
  buttonActive,
  buttonCompleted,
  buttonAll,
  buttonClearCompleted,
  Count,
  tasks,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">{Count}items left</span>
      <TaskFilter
        tasks={tasks}
        buttonAll={buttonAll}
        buttonCompleted={buttonCompleted}
        buttonActive={buttonActive}
      />
      <button className="clear-completed" onClick={buttonClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
