import Task from "./Task";
import PropTypes from "prop-types";
function TasklIst({
  tasks,
  toggleCompleted,
  toggleEditing,
  deleteTask,
  editedText,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            completed={task.completed}
            editing={task.editing}
            description={task.description}
            created={task.created}
            toggleCompleted={toggleCompleted}
            toggleEditing={toggleEditing}
            deleteTask={deleteTask}
            editedText={editedText}
          />
        );
      })}
    </ul>
  );
}
TasklIst.defaultProps = {
  tasks: [],
  toggleCompleted: () => {},
  toggleEditing: () => {},
  deleteTask: () => {},
  editedText: () => {},
};
TasklIst.propTypes = {
  tasks: PropTypes.array,
  toggleCompleted: PropTypes.func,
  toggleEditing: PropTypes.func,
  deleteTask: PropTypes.func,
  editedText: PropTypes.func,
};
export default TasklIst;
