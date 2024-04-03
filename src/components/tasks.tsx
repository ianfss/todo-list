import { Task } from './task'
import { TasksEmptyState } from './tasks-empty-state'

import styles from './tasks.module.css'

interface TasksProps {
  tasks: {
    text: string
    isCompleted: boolean
  }[],
  onDeleteTask: (taskToDelete: string) => void
  onCompleteTask: (taskToComplete: string) => void
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps) {
  const allTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <div>
      <div className={styles.taskCount}>
        <div className={styles.createdTaskCount}>
          <strong>Tarefas criadas</strong>
          <span>{allTasks}</span>
        </div>
        <div className={styles.completedTaskCount}>
          <strong>Concluídas</strong>
          <span>{completedTasks}</span>
        </div>
      </div>

      {
        tasks.length > 0
          ?
          tasks.map(task => (
            <Task key={task.text} content={task.text} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} isCompleted={task.isCompleted} />
          ))
          :
          <TasksEmptyState />
      }
    </div>
  )
}