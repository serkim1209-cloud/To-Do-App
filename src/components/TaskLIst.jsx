import Task from "./Task";

function TasklIst(){
    return(
        <ul className="todo-list">
        <Task
        taskclassName={"completed"}
        description={"Completed task"}
        created={"created 17 seconds ago"}
        />
        <Task
        taskclassName={"editing"}
        description={"Editing task"}
        created={"created 5 minutes ago"}
        input={<input type="text" class="edit" value="Editing task"/>}
        />
        <Task
        description={"Active task"}
        created={"created 5 minutes ago"}
        />
        </ul>
    )
}
export default TasklIst;