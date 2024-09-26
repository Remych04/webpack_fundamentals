import { useState } from "react";
import styles from "./index.module.scss";

export function App() {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button className={styles.button} onClick={increment}>
        <span>increment</span>
      </button>
    </div>
  );
}
