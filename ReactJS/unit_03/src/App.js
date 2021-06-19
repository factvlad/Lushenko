import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from "./Footer";
import CategoryDescription from "./CategoryDescription";
import Error404 from "./Error404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/category" component={Category} />
          <Route path="/cat/:catName" component={CategoryDescription} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
