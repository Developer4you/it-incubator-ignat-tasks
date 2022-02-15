import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

const arr = ["One", "Two", "Three"];

function HW7() {
  const [value, onChangeOption] = useState(arr[1]);

  return (
    <div>
      <hr />
        <h3>Homeworks 7</h3>
      <div>
        <SuperSelect
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <div>
        <SuperRadio
          name={"radio"}
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperSelect/>*/}
      {/*<AlternativeSuperRadio/>*/}
      <hr />
    </div>
  );
}

export default HW7;
