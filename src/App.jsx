import NewTaskForm from './components/NewTaskForm'
import TaskLIst from './components/TaskLIst'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (
    <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm/>
    </header>
    <section className="main">
      <TaskLIst/>
    </section>
      <Footer/>
    </section>
  )
}

export default App
