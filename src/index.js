import React from "react";
import ReactDOM from "react-dom";

const time = new Date(29, 12, 22, 15);
const presentTime = time.getHours();

var greeting;

const inlineCSS = {
  color: "black"
};

if (presentTime < 12) {
  greeting = "Good Morning";
  inlineCSS.color = "red";
} else if (presentTime <= 18) {
  greeting = "Good Afternoon";
  inlineCSS.color = "green";
} else {
  greeting = "Good Night";
  inlineCSS.color = "blue";
}

ReactDOM.render(
  <div className="heading">
    {presentTime >= "0" && presentTime <= "12" ? (
      <h1 style={{ color: "red" }}>Good Morning</h1>
    ) : presentTime > "12" && presentTime <= "18" ? (
      <h1 style={{ color: "green" }}>Good Afternoon</h1>
    ) : (
      <h1 style={{ color: "blue" }}>Good Evening </h1>
    )}

    <h1 style={inlineCSS}> {greeting} </h1>
  </div>,
  document.getElementById("root")
);
