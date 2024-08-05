import { TaskList } from "@/components/pages/home/TaskList";
import styles from "./page.module.scss";
import TaskManager from "./_components/pages/home/TaskManager";

export default function Home() {
  return (
    <div className={styles.outer}>
      {/* App's Title */}
      <h1 className={styles.title}>🏔️ Todo List App 🚀</h1>

      {/* List of tasks */}
      <TaskList />

      {/* Task Management - CRUD */}
      <TaskManager />
    </div>
  );
}
