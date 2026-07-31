
function TaskFilter({list,setList,tasks,setTasks,taskList}) {
const All=()=>{
  return(
    <ul>
      {
        tasks.map((task)=>{
          return <li key={task.id}>{task.title}</li>
        })
      }
    </ul>
  )
}
const Active=()=>{
  return(
    <ul>
      {
        tasks.filter((task)=>!task.completed).map((task)=>
        {return <li key={task.id}>{task.title}</li>}
        )
      }
    </ul>
  )
}
const Completed =()=>{
  return(
    <ul>
      {
        tasks.filter((task)=>task.completed).map((task)=>{
          return <li key={task.id}>{task.title}</li>
        })
      }
    </ul>
  )
}
  return (
    <ul className="filters">
      <li>
        {list==="All"&&<All/>}
        <button className="selected" onClick={()=>setTasks("All")}>All</button>
      </li>
      <li>
        {list==="Active"&&<Active/>}
        <button onClick={()=>setList("Active")}>Active</button>
      </li>
      <li>
        {list==="Completed"&&<Completed/>}
        <button onClick={()=>setList("Completed")}>Completed</button>
      </li>
    </ul>
    
  );
}
export default TaskFilter;
