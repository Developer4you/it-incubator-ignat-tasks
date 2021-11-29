import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
  addUser: () => void; // need to fix any
  error: string; // need to fix any
  totalUsers: number; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = name ? s.input : s.error; // need to fix with (?:)

  return (
    <div>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            addUser();
          }
        }}
        className={inputClass}
      />
      <button onClick={addUser}>add</button>
      <div>{error}</div>
      <span>{"total users: " + totalUsers}</span>
    </div>
  );
};

export default Greeting;
