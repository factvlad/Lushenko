import React from "react";
import { useState } from "react";
import env from "../env.json";

function Create() {
  const [url, setUrl] = useState("");
  const [lineClass, setLineClass] = useState("hide"); // скрываем
  const [formClass, setFormClass] = useState(""); // скрываем

  let sendData = (obj) => {
    setFormClass("hide");
    setLineClass("");
    fetch(env.urlBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + "/" + response.url);
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === "") {
      alert("Заполните поля");
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div>
      <form onSubmit={loadDataFromForm} className={formClass}>
        <div class="form-row card-body text-center ">
          <textarea 
            name="note"
            id="note"
            placeholder="Введите текст заметки"
            class="form-control  text-center"
          ></textarea>
          <button type="submit" class="w-1 btn btn-lg btn-primary  center">
            Создать Note
          </button>
        </div>
      </form>
      <div className={lineClass}>
        <div className=" w-100 card-body text-center">
          <a className=" list-group-item list-group-item-warning " href={url}>
            Просмотреть Заметку
          </a>
        </div>
        <div className="w-70 card-body text-center">
          {/* <button
            class="w-100 btn btn-lg btn btn-outline-warning "
            onClick={function () {
              setFormClass("");
              setLineClass("hide");
            }}
          >
            Cоздать новую заметку
          </button> */}
        </div>
      </div>

      
    </div>
    
  );
}

export default Create;
