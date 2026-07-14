import Task from "./Task";

function TasklIst(){
    return(
        <ul className="todo-list">
        <Task
        taskClass={"completed"}
        description={"Completed task"}
        created={"created 17 seconds ago"}
        />
        <Task
        taskClass={"editing"}
        description={"Editing task"}
        created={"created 5 minutes ago"}
        />
        <Task
        description={"Active task"}
        created={"created 5 minutes ago"}
        />
        </ul>
    )
}
export default TasklIst;