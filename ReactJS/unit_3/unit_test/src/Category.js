function Category(props) {
  let catNav = props.data;
  const itemList = catNav.map((item) => (
    <li key={item.text}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));

  return (
    <>
      <h1>Category</h1>
      <ul>{itemList}</ul>
    </>
  );
}

export default Category;
