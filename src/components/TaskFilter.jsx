import App from "../App";
import PropTypes from "prop-types";
function TaskFilter({ filter, setFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter === "All" && "selected"}
          onClick={() => setFilter("All")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === "Active" && "selected"}
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === "completed" && "selected"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
TaskFilter.defaultProps = {
  filter: [],
  setFilter: () => {},
};
TaskFilter.propTypes = {
  filter: PropTypes.array,
  setFilter: PropTypes.func,
};
export default TaskFilter;
