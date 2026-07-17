import Task from "./Task";

function TasklIst({
  tasks,
  toggleCompleted,
  toggleEditing,
  deleteTask,
  newValue,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        let currentClass = "active";
        if (task.completed) currentClass = "completed";
        if (task.editing) currentClass = "editing";

        return (
          <Task
            key={task.id}
            id={task.id}
            taskClass={currentClass}
            description={task.description}
            created={task.created}
            toggleCompleted={toggleCompleted}
            toggleEditing={toggleEditing}
            deleteTask={deleteTask}
            newValue={newValue}
          />
        );
      })}
    </ul>
  );
}

export default TasklIst;
