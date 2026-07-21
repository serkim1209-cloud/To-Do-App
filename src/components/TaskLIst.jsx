import Task from "./Task";

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

export default TasklIst;
