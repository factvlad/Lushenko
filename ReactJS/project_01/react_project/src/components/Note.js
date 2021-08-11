import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState("");
  const [lineClass, setLineClass] = useState("");
  const [formClass, setFormClass] = useState("hide");
  const [errorClass, setErrorClass] = useState("hide");

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.result) {
            setNoteText(response.note);
            setLineClass("");
            setFormClass("hide");
            setErrorClass("hide");
          } else if (!response.result) {
            setLineClass("hide");
            setFormClass("hide");
            setErrorClass("");
          }
        });
    } else {
      setLineClass("hide");
      setFormClass("");
      setErrorClass("hide");
    }
  }, []);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === "") {
      alert("Заполните поля");
      return false;
    }
    noteURL = url;
    window.location.href = env.url + "/" + url;
  }

  function searchNote() {
    window.location.href = env.url;
  }
  return (
    <div>
  
      <form action="" onSubmit={getNote}>
        <div className="form-row card-body text-center ">
          <div className={formClass}>
            <input
              type="text"
              name="url"
              id="url"
              className="form-control text-center "
              placeholder="Введите хэш заметки"
            />

            <button
              type="submit"
              className="w-1 btn btn-lg btn-primary btn-success center"
            >
              Искать Note
            </button>
          </div>
        </div>
      </form>
      <div className="form-row card-body text-center ">
        <div className={lineClass}>
          <h3>Заметка:</h3>
          <div className="display-6">{noteText}</div>
          <br />
          <div>
            <button onClick={searchNote} className="btn  btn-danger">
              Удалить
            </button>
          </div>

          <br />
        </div>
        <div className={errorClass}>
          <p>Произошла ошибка. Такой note не найден!!</p>
        </div>
      </div>
    </div>
  );
}

export default Note;
