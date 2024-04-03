import { ChangeEvent, FormEvent, useState } from 'react'

import { PlusCircledIcon } from '@radix-ui/react-icons'

import styles from './new-task-form.module.css'

interface NewTaskFormProps {
  onCreateTask: (taskContent: string) => void
}

export function NewTaskForm({ onCreateTask }: NewTaskFormProps) {
  const [newTaskContent, setNewTaskContent] = useState('')

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(newTaskContent)

    onCreateTask(newTaskContent)
    setNewTaskContent('')
  }

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)
  }

  const isNewTaskButtonDisabled = newTaskContent.length === 0

  return (
    <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
      <input
        name='task'
        value={newTaskContent}
        onChange={handleNewTaskContentChange}
        className={styles.newTaskInput}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className={styles.newTaskButton}
        type="submit"
        disabled={isNewTaskButtonDisabled}
      >
        Criar
        <PlusCircledIcon />
      </button>
    </form>
  )
}