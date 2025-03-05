import React from "react";
import CompA from "./compA";

const Props = () => {
  let names = "Hinali";
  let array = ["hetvi", "dhruvi"];
  let object = {
    name1: "srushti",
    name2: "vishw"
  };
  return (
    <div>
      <CompA value={object}/>
    </div>
  );
};

export default Props;
