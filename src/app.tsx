import { Header } from "./components/header";
import { NewTaskForm } from "./components/new-task-form";
import { Tasks } from "./components/tasks";

import styles from './app.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm />
        <Tasks />
      </div>
    </div>
  )
}
