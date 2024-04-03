import { PlusCircledIcon } from '@radix-ui/react-icons'
import styles from './new-task-form.module.css'

export function NewTaskForm() {
  return (
    <form className={styles.newTaskForm}>
      <input
        className={styles.newTaskInput}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className={styles.newTaskButton}
        type="submit"
      >
        Criar
        <PlusCircledIcon />
      </button>
    </form>
  )
}