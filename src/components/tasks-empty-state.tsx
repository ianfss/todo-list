import { FileTextIcon } from '@radix-ui/react-icons'
import styles from './tasks-empty-state.module.css'

export function TasksEmptyState() {
  return (
    <div className={styles.tasksEmptyState}>
      <FileTextIcon />
      <div>
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}