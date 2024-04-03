import { TrashIcon } from '@radix-ui/react-icons'
import styles from './task.module.css'

interface TaskProps {
  onDeleteTask: (taskToDelete: string) => void
  content: string
  // isCompleted: boolean
}

export function Task({ content, onDeleteTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <span>{content}</span>
      <button
        onClick={handleDeleteTask}
        type='button'
      >
        <TrashIcon />
      </button>
    </div>
  )
}