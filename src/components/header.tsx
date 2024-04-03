import toDoListLogo from '../assets/todo-list-logo.svg';

import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoListLogo} alt="ToDo List Logo" />
    </header>
  )
}