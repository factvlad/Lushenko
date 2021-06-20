import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  let count4 = 0;
  let textInput05 = React.createRef();
  let textInput06 = React.createRef();
  let textInput07 = React.createRef();
  let textInput09 = React.createRef();
  let textInput10 = React.createRef();
  let textOut08 = React.createRef();
  let textOut = React.createRef();

  // const [output05, setOutput05] = useState("")
  const [output, setOutput] = useState("7");
  const [output08, setOutput08] = useState("");
  const [output09, setOutput09] = useState("");
  const [output10, setOutput10] = useState("");

  function task1() {
    console.log("task2");
  }
  function task2(event) {
    // document.querySelector(".task-2").classList.add("active")
    event.target.classList.add("active");
    // console.log(event.target.className)
    // console.log(event);
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    console.log(count4++);
  }
  function task5(event) {
    if (event.target.checked == true) {
      textOut.current.innerHTML = event.target.value;
    } else {
      textOut.current.innerHTML = 0;
    }
    // if (event.target.checked == true) {
    //   setOutput05(textInput05.current.value)
    // } else {
    //   setOutput05("0")
    // }
  }
  function task6() {
    setOutput(textInput06.current.value);
  }
  function task7() {
    textInput07.current.style.backgroundColor = `rgb(${randomInt(
      0,
      255
    )}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

    function randomInt(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }
  }

  function task8(event) {
    console.log(event.key);

    // if (!isNaN(event.key)) {
    //   textOut08.current.innerHTML += 1;
    // } else {
    //   textOut08.current.innerHTML += 0;
    // }

    if (!isNaN(event.key)) {
      setOutput08((textOut08.current.innerHTML += 1));
    } else {
      setOutput08((textOut08.current.innerHTML += 0));
    }
  }

  function task9(event) {
    setOutput09(event.target.value);
  }
  let ar10 = [5, 6, 7];
  function task10() {
    let newNum = textInput10.current.value;
    let newParse = parseInt(newNum);
    ar10.push(newParse);
    setOutput10(ar10)
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" ref={textInput05} onChange={task5} />
        <div className="out-5" ref={textOut}>
          {/* {output05} */}
        </div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={textInput06} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={textInput07}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={textOut08}>
          {output08}
        </div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input
          type="range"
          className="task-9"
          ref={textInput09}
          onInput={task9}
        ></input>
        <div className="out-9">{output09}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" ref={textInput10} className="i-10"></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
        <div className="out-10">{output10}</div>
      </section>
    </>
  );
}

export default App;
