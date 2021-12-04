import React from "react";
import "./styles.css";
var shoppingList = ["appple", "banana", "orange", "kiwi", "guava", "coconut"];

export default function App() {
  function getbg(index) {
    if (index % 2 === 0) {
      return "blue";
    }
    return "red";
  }
  return (
    <div className="App">
      <h1>my shopping list</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li style={{ backgroundColor: getbg(index), padding: "1rem" }}>
              {" "}
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
