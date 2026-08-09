import TaskFilter from "./TaskFilter";
import PropTypes from "prop-types";
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
Footer.defaultProps = {
  Count: 0,
  filter: "",
  setFilter: () => {},
  clearCompleted: () => {},
};
Footer.propTypes = {
  Count: PropTypes.number,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
};
export default Footer;
