import React from "react";
import s from "./App.module.css";
import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
  return (
    <div className={s.App}>
      <div className={s.wrap}>
        <h2>React homeworks:</h2>
        <HW5 />
      </div>
    </div>
  );
}

export default App;
