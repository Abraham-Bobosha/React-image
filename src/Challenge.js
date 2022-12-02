import React from "react";
import ReactDom from "react-dom";

const number = "9";
const fname = "Abraham";
const lname = "bobosha";

ReactDom.render(
  <div>
    <h1>
      Hello you name is {fname} {lname}.
    </h1>
    <p>Your lucky number is {number}</p>
  </div>,

  document.getElementById("root")
);
