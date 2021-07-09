import "./App.css";
import React, { useState } from "react";

function App() {
  const cE = React.createElement;
  //task 2
  const h1 = cE("h1", {}, "unit_08");
  //task 3
  const h2 = cE("р2", { className: "text-orange" }, "header 2");
  //task 4
  const p = cE("p", { style: { color: "red" } }, "this is p");
  //task 5
  const input = cE("input", { value: "55" });
  //task 6
  const p1 = cE("p", {}, "world");
  const p2 = cE("p", {}, "world");
  const div = cE("div", { className: "text-grey" }, p1, p2);

  //task 7

  let [s1, setS1] = useState([]);
  let newRef = React.createRef();

  const t7Input = React.createElement("input", {
    ref: { newRef }, value : "123"
  });
console.log(newRef);



  // function myFunction() {
  //   let inpValue = newRef.current.value;
  //   let arr = [...s1];
  //   if (inpValue > "") {
  //     arr.push(inpValue);
  //   }
  //   setS1(arr.map((item, index) => <li key={index.toString()}>{item}</li>));
  // }

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {t7Input}

      <button /* onClick={myFunction} */>GO</button>
      <ul>{s1}</ul>
    </>
  );
}

export default App;
