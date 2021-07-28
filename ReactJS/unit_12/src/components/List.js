function List(data) {
  console.log(data.user);

  return (
      <ul>
          {data.user.map((elem, index) => <li key={index}>Pass:{elem.passport} Name:{elem.name} Age:{elem.age}</li>)}
      </ul>
  );
}

export default List;