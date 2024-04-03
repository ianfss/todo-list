import { TrashIcon } from '@radix-ui/react-icons'

import styles from './task.module.css'

interface TaskProps {
  onDeleteTask: (taskToDelete: string) => void
  onCompleteTask: (taskToComplete: string) => void
  content: string
  isCompleted: boolean
}

export function Task({ content, onDeleteTask, onCompleteTask, isCompleted }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCompleteTask() {
    onCompleteTask(content)
  }

  return (
    <div className={styles.task}>
      <label className={styles.checkmarkContainer}>
        <input type="checkbox" checked={isCompleted} onChange={handleCompleteTask} />
        <span className={styles.checkmark} />
      </label>

      <span className={`${isCompleted ? styles.taskCompleted : styles.taskContent}`}>{content}</span>

      <button
        onClick={handleDeleteTask}
        type='button'
      >
        <TrashIcon />
      </button>
    </div>
  )
}