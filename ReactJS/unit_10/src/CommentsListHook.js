import React from 'react';

export default function CommentsListHook(props) {
  
  function onlyEven() {

  };

   return (
    <>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
      {props.data.map((el, index) => (
        <section key={el.id}>
          <p><b>{index + 1}. {el.email}</b></p>
          <p>{el.body}</p>
        </section>
      ))}
    </>
  );
};
