 import styles from "./task.module.css"
 import { TbTrash } from "react-icons/tb" 
 import { FaRegCheckCircle } from "react-icons/fa"; 
 
 const Task = ({task, onComplete, onDelete}) => {
  return (
    <div className={styles.task}>
        <button className={styles.checkContainer} onClick={() => {
          onComplete(task.id)
        }}>
            {task.isCompleted ? <FaRegCheckCircle/> : <div/>}
        </button>

        <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

        <button onClick={() => 
          onDelete(task.id)
        } className={styles.deleteButton}>
            <TbTrash size={20}/>
        </button>
    </div>
  )
}

export default Task