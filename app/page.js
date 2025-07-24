import Image from "next/image";
import styles from "./page.module.css";
import ToDoApp from "./toDoApp/ToDoApp";

export default function Home() {
  return (
    <div className={styles.page}>
    <ToDoApp/>
    </div>
  );
}
