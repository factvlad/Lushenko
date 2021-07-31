import "./App.css";
import React, { useState } from "react";

function App() {
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");
  const [t4, setT4] = useState("");
  const [t5, setT5] = useState("");

  function task1() {
    fetch("http://test1.ua/api.php", {
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then((response) => response.text(""))
      .then((response) => {
        console.log(response);
        setT1(response);
      });
  }

  function task2(event) {
    event.preventDefault();
    let n1 = event.target[0].value;
    let n2 = event.target[1].value;
    fetch("http://test1.ua/api.php", {
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 2, num1: n1, num2: n2 }),
    })
      .then((response) => response.text(""))
      .then((response) => {
        console.log(response);
        setT2(response);
      });
  }

  // function task3(event) {
  //   event.preventDefault();
  //   let fname = event.target[0].value;
  //   let fdata = event.target[1].value;
  //   console.log(fname, fdata);
  //   fetch("http://test1.ua/api.php", {
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: JSON.stringify({ action: 3, filename: fname, filedata: fdata }),
  //   })
  //     .then((response) => response.text(""))
  //     .then((response) => {
  //       if (response > 0) {
  //         setT3(<a href={`http://test1.ua//files/${fname}`}>Скачать</a>);
  //       } else {
  //         setT3(false);
  //       }
  //     });
  // }

  function task3(event) {
    event.preventDefault();
    fetch("http://test1.ua/api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        action: 3,
        filename: event.target.filename.value,
        filedata: event.target.filedata.value,
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        if (response > 0) {
          setT3(event.target.filename.value);
        } else {
          setT3(false);
        }
      });
  }

  function task4(event) {
    fetch("http://test1.ua/api.php", {
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 4 }),
    })
      .then((response) => response.text(""))
      .then((response) => {
        setT4(response);
      });
  }

  function task5(event) {
    event.preventDefault();

    fetch("http://test1.ua/api.php", {
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 5 }),
    })
      .then((response) => response.json())
      // .then((response) => console.log(response));
      .then((response) =>
        setT5(
          response.map((item) => (
            <li>
              {item.ccy} - {item.buy}
            </li>
          ))
        )
      );
  }

  return (
    <div className="container">
      <h1>ItGid.info</h1>
      <hr />
      <div>
        <h2>Время сервера</h2>
        <button onClick={task1}>GET</button>
        <p>{t1}</p>
      </div>
      <hr />
      <div>
        <h2>Случайное число между</h2>
        <form action="" onSubmit={task2}>
          <div>
            <input type="number" />
          </div>
          <div>
            <input type="number" />
          </div>
          <button type="sumbit">Go</button>
        </form>
        <p>{t2}</p>
      </div>
      <hr />
      <div>
        <h2>Создание файла</h2>
        <form action="" onSubmit={task3}>
          <div>
            <input type="text" name="filename" />
          </div>
          <div>
            <input type="text" name="filedata" />
          </div>
          <button type="sumbit">Go</button>
        </form>
        <p>{t3 ? <a href={"http://test1.ua/files/" + t3}>Скачать</a> : ""}</p>
      </div>
      <hr />
      <div>
        <h2>Твоя операционка</h2>
        <button onClick={task4}>GET</button>
        <p>{t4}</p>
      </div>
      <hr />
      <div>
        <h2>Получение курса валют</h2>
        <form action="" onSubmit={task5}>
          <button type="sumbit">Push</button>
        </form>
        <ul>{t5}</ul>
      </div>
    </div>
  );
}

export default App;
