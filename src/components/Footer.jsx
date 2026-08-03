import TaskFilter from "./TaskFilter";

function Footer({ Count, filter, setFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{Count}items left</span>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
