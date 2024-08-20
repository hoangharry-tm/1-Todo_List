import { DataContextProvider } from "@/app/_contexts/DataContext";
import { TaskList } from "@/components/pages/home/TaskList";
import TaskManager from "@/components/pages/home/TaskManager";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.outer}>
      {/* App's Title */}
      <h1 className={styles.title}>🏔️ Todo List App 🚀</h1>

      <DataContextProvider>
        {/* List of tasks */}
        <TaskList />

        {/* Task Management - CRUD */}
        <TaskManager />
      </DataContextProvider>
    </div>
  );
}
