import Task from "./Task";
function TasklIst({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
        key={task.id}
          taskClass={task.taskClass}
          description={task.description}
          created={task.created}
        />
      ))}
    </ul>
  );
}
export default TasklIst;
