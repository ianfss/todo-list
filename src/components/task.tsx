import { TrashIcon } from '@radix-ui/react-icons'
import styles from './task.module.css'

interface TaskProps {
  content: string
  isCompleted: boolean
}

export function Task({ content, isCompleted}: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" checked={isCompleted} />
      <span>{content}</span>
      <button type='button'>
        <TrashIcon />
      </button>
    </div>
  )
}