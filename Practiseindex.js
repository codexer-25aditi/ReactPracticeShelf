//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentime = date.getHours();
const Style = {
  color: ""
};
let greetings;
if (currentime < 12) {
  greetings = "Good Morning";
  Style.color = "red";
} else if (currentime < 18) {
  greetings = "Good Afternoon";
  Style.color = "green";
} else {
  greetings = "Good Night";
  Style.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={Style}>
      {greetings}
    </h1>
  </div>,
  document.getElementById("root")
);
