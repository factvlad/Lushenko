import React, { useState, useEffect } from 'react';

export default function Comments2ListHook(props) {
  const [data, setData] = useState([]);

  function onlyEven() {
    let p = data;
    p = p.filter((item, index) => {
      if (index % 2 === 0) {
        return true;
      };
    });

    setData(p);
  };

  useEffect(() => {
    if (props.data.length > 0) setData(props.data);
  }, [props]);

  return (
    <>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
      {data.map((el, index) => (
        <section key={el.id}>
          <p><b>{index + 1}. {el.email}</b></p>
          <p>{el.body}</p>
        </section>
      ))}
    </>
  );
};


