import React, { useEffect, useState } from 'react';

export default function PlaceholderPostHook() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(responseData => {
        setState(responseData);
      });
  }, []);

  return (

    <section>
      {state.map(function (item, index) {
        // return <><h2 key={index}>{item.id} {item.title}</h2><p key={item.key}>{item.body}</p></>
        return <div key={index}><h2>{item.id} {item.title}</h2><p>{item.body}</p></div>
      })}
    </section >
  );
};