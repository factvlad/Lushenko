import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  //task1
  let myRef1 = React.createRef();
  let [st1, setSt1] = useState();
  function task1() {
    setSt1(myRef1.current.value);
  }

  //task2
  let [st2, setSt2] = useState(0);
  function task2() {
    setSt2(st2 + 1);
  }

  //task3
  let [st3, setSt3] = useState();
  function task3(event) {
    setSt3(event.target.value);
  }

  //task4
  let [st4, setSt4] = useState(0);
  function task4() {
    setSt4(st4 + 1);
  }

  //task5
  let [st5, setSt5] = useState(0);
  function task5(event) {
    if (event.target.checked) {
      setSt5(event.target.value);
    } else {
      setSt5(0);
    }
  }

  //task6
  let [st6, setSt6] = useState(7);
  function task6(event) {
    setSt6(event.target.value);
  }

  //task7
  let [st7, setSt7] = useState();
  function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  // let color = {
  //   background: st7
  // };
  // console.log(st7);
  // console.log(color);

  function task7() {
    let color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(
      0,
      255
    )})`;
    setSt7(color);

    // setSt7(
    //   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`
    // );
  }

  //task
  let [st8, setSt8] = useState("");
  function task8(event) {
    if (!isNaN(event.key)) {
      st8 += "1";
    } else {
      st8 += "0";
    }
    setSt8(st8);
  }

  //task9
  const [st9, setSt9] = useState();
  function task9(event) {
    setSt9(event.target.value);
  }

  //task10
  let myRef10 = React.createRef();
  let [st10, setSt10] = useState("");
  function task10() {
    let newNum = myRef10.current.value;
    let newParse = [...st10, newNum];
    setSt10(newParse);
    console.log(newParse)
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input ref={myRef1} type="text" />
        <button className="task-1" onClick={task1}>
          Push
        </button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div
          style={{ backgroundColor: `${st7}` }}
          /*  style={color} */ className="block-7"
        ></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={myRef10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
