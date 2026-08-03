import NewTaskForm from "./components/NewTaskForm";
import TaskLIst from "./components/TaskLIst";
import Task from "./components/Task";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      try {
        const tasks = await fetch("https://jsonplaceholder.typicode.com/todos");
        const All = await tasks.json();
        const taskList = All.map((tasks) => ({
          id: tasks.id,
          description: tasks.title,
          completed: tasks.completed,
          created: "",
        }));
        setTasks(taskList);
      } catch (error) {
        console.log("error");
      }
    }
    getTasks();
  }, []);
  const [filter, setFilter] = useState("All");
  function visibleTasks() {
    if (filter === "Active") {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  const Count = tasks.filter((task) => !task.completed).length;

  function addTaskForm(text) {
    const newTask = {
      id: Date.now(),
      description: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    );
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function editedText(id, value) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, description: value, editing: false };
        } else {
          return task;
        }
      }),
    );
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTaskForm={addTaskForm} />
      </header>
      <section className="main">
        <TaskLIst
          tasks={visibleTasks()}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
          editedText={editedText}
        />
      </section>
      <Footer
        Count={Count}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
