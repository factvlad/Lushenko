import "./App.css";
import React, { useState } from "react";

function App() {
  const cE = React.createElement;
  //task 2
  const h1 = cE("h1", {}, "unit_08");
  //task 3
  const h2 = cE("р", { className: "text-orange" }, "header 2");
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

  const ul = cE("ul", {}, s1);
  const t7Input = cE("input", {
    ref: newRef,
  });
  const t7Button = React.createElement(
    "button",
    {
      onClick: () => {
        let inpValue = newRef.current.value;
        let arr = [...s1];
        if (inpValue > "") {
          arr.push(inpValue);
        }
        setS1(arr.map((item, index) => <li key={index.toString()}>{item}</li>));
      },
    },
    "Push"
  );

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {t7Input}
      {t7Button}
      {ul}
    </>
  );
}

export default App;
