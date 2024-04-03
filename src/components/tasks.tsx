import { Task } from './task'
import { TasksEmptyState } from './tasks-empty-state'
import styles from './tasks.module.css'

const tasks = [
  {
    text: 'Ler o livro "Desenvolvimento de Software"',
    isCompleted: false
  },
  {
    text: 'Fazer o desafio de React do Ignite',
    isCompleted: false
  },
  {
    text: 'Assistir aula de React Native',
    isCompleted: false
  }
]

export function Tasks() {
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
            <Task key={task.text} content={task.text} isCompleted />
          ))
          :
          <TasksEmptyState />
      }


    </div>
  )
}