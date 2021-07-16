import React, { useState } from 'react';

export default function CommentHook() {
  const [state, setState] = useState([]);

  function selectHandler(e) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.value + '/comments')
      .then(response => response.json())
      .then(responseData => {
        setState(responseData);
      });
  };

  return (
    <>
      <select onChange={selectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <h1>Comments</h1>
        {state.map(function (item, index) {
          return <div key={item.id}><p><b>{index + 1}. {item.email}</b></p> <p>{item.body}</p></div>
        })}
      </div>
    </>
  );
};



