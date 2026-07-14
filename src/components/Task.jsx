
function Task({taskClass,description,created,input}){
    return(
 <li className={taskClass}>
  <div className="view">
     <input className="toggle" type="checkbox"/>
     <label>
     <span className="description">{description}</span>
     <span className="created">{created}</span>
     </label>
     <button className="icon icon-edit"></button>
     <button className="icon icon-destroy"></button>
  </div>
   <input type="text" className="edit" defaultValue="Editing task"/>
 </li>
 )
}
export default Task;