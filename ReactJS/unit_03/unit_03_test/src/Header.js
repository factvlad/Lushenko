function Header(props) {
  let headerNav = props.data;
  const catlist = headerNav.map((item) => (
    <li key={item.text}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{catlist}</ul>
    </nav>
  );
}

export default Header;
