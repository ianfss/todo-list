import { useState } from "react";

import { Header } from "./components/header";
import { NewTaskForm } from "./components/new-task-form";
import { Tasks } from "./components/tasks";

import styles from './app.module.css'

export function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'Ler o livro "Desenvolvimento de Software"',
      isCompleted: false
    },
    {
      text: 'Fazer o desafio de React do Ignite',
      isCompleted: true
    },
    {
      text: 'Assistir aula de React Native',
      isCompleted: false
    }
  ])

  function handleCreateTask(taskContent: string) {
    setTasks([...tasks, {
      text: taskContent,
      isCompleted: false
    }])
  }

  function handleDeleteTask(taskToDelete: string) {
    const tasksWithoutDeletedTask = tasks.filter(task => task.text !== taskToDelete)

    setTasks(tasksWithoutDeletedTask)
  }

  function handleCompleteTask(taskToComplete: string) {
    const updatedTasks = tasks.map(task => {
      if (task.text === taskToComplete) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })
    
    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm onCreateTask={handleCreateTask} />
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
      </div>
    </div>
  )
}
