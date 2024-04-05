import { useEffect, useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"


const LOCAL_STORAGE_KEY = "todo:savedTasks"

const App = () => {

  const [tasks, setTasks] = useState([])

  function loadSave () {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(saved);

    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSave()
  }, [])

  function setTasksAnSave (newTasks) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskTitle) {
    setTasksAnSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById (taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasksAnSave(newTasks)
  }

  function togleTaskComplotedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })

    setTasksAnSave(newTasks )
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks}
      onDelete={deleteTaskById}
      onCompleted={togleTaskComplotedById}/>
    </>
  )
}

export default App
