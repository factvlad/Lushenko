import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from "./Footer";
import CategoryDescription from "./CategoryDescription";
import Error404 from "./Error404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const headerNav = [
  { link: "/", text: "Главная" },
  { link: "/about", text: "О сайте" },
  { link: "/category", text: "Категории" },
];

const catNav = [
  { link: "/category/{Notoboke}", text: "Ноуты" },
  { link: "/category/Monitor", text: "Мониторы" },
  { link: "/category/Telephone", text: "Мобильные телефоны" },
];

function App() {
  return (
    <>
      <Header data={headerNav} />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/category">
            <Category data={catNav} />
          </Route>
          <Route path="/category/:catName" component={CategoryDescription} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
