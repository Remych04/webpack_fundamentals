import { useState } from "react";
import styles from "./index.module.scss";
import { Link, Outlet } from "react-router-dom";

export function App() {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <Link to={"/about"}>about</Link>
      <br/>
      <Link to={"/shop"}>shop</Link>
      <h1>{counter}</h1>
      <button className={styles.button} onClick={increment}>
        <span>increment</span>
      </button>
      <Outlet />
    </div>
  );
}
