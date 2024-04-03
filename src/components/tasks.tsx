import { Task } from './task'
import { TasksEmptyState } from './tasks-empty-state'

import styles from './tasks.module.css'

interface TasksProps {
  tasks: {
    text: string
    isCompleted: boolean
  }[],
  onDeleteTask: (taskToDelete: string) => void
}

export function Tasks({ tasks, onDeleteTask }: TasksProps) {
  return (
    <div>
      <div className={styles.taskCount}>
        <div className={styles.createdTaskCount}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.completedTaskCount}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      {
        tasks.length > 0
          ?
          tasks.map(task => (
            <Task key={task.text} content={task.text} onDeleteTask={onDeleteTask}  />
          ))
          :
          <TasksEmptyState />
      }
    </div>
  )
}