import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide'); // скрываем
    const [formClass, setFormClass] = useState(''); // скрываем

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div class="text-center container">
            <form onSubmit={loadDataFromForm} className={formClass}>
                {/* <label htmlFor="">Введите заметку</label> */}
                <textarea className="form-control" name="note" id="note" placeholder="Введите заметку"></textarea>
                <button type="submit" className="btn btn-primary">Создать </button>
            </form>
            <div className={lineClass}>
                <div>{url}</div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={function () { window.location.reload() }}>
                        Cоздать новую заметку </button>
                </div>
            </div>
        </div>
    );
}

export default Create;