import NewTaskForm from "./components/NewTaskForm";
import TaskLIst from "./components/TaskLIst";
import Task from "./components/Task";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskClass: "completed",
      description: "Completed task",
      created: "created 17 seconds ago",
    },
    {
      id: 2,
      taskClass: "editing",
      description: "Editing task",
      created: "created 5 minutes ago",
    },
    {
      id: 3,
      description: "Active task",
      created: "created 5 minutes ago",
    },
  ]);
function toggleComleted(id){
setTasks(
tasks.map((task)=>{
if(task.id===id){
return {
...task,
completed: !task.completed
}
}
return task
})
)
}
function toggleEditing(id){
setTasks(
tasks.map((task)=>{
if(task.id===id){
return{
...task,
editing:!task.editing
}
}
return task
})
)
}

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskLIst tasks={tasks}/>
      </section>
      <Footer />
    </section>
  );
}

export default App;
