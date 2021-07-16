import React, { useState } from 'react';
//import CommentsListHook from './CommentsListHook';
import Comments2ListHook from './Comments2ListHook';

export default function Comment2Hook() {
  const [state, setState] = useState([]);

  function selectHandler(e) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.value + '/comments')
      .then(response => response.json())
      .then(responseData => {
        setState(responseData);
        //console.log(responseData);
      });
  };

  return (
    <>
      <h2>Choose post ID:</h2>
      <select onChange={selectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        {/* <CommentsListHook data={state} /> */}
        <Comments2ListHook data={state} />
      </div>
    </>
  );
};



