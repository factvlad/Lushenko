function Nav(props) {
  let data = props.nav
  const itemList = data.map((item) => (
    <li key={item.text}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{itemList}</ul>
    </nav>
  );
}
export default Nav;
