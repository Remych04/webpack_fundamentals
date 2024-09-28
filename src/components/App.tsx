import { useState } from "react";
import styles from "./index.module.scss";
import { Link, Outlet } from "react-router-dom";
import jpeg from "@/assets/assetjpg.jpg";
import png from "@/assets/assetpng.png";
import Svg from "@/assets/assetsvg.svg";

export function App() {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  if(__PLATFORM__ === 'mobile'){
    return <div>mobile</div>
  }

  return (
    <div>
      <h1>Platform: {__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={jpeg} alt="" />
        <img width={100} height={100} src={png} alt="" />
      </div>
      <div>
        <Svg width={50} height={50} />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1>{counter}</h1>
      <button className={styles.button} onClick={increment}>
        <span>increment</span>
      </button>
      <Outlet />
    </div>
  );
}
