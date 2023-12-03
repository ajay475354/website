import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About/index";
import Corporates from "./components/Corporates/index";
import Trainers from "./components/Trainers/index";
import Courses from "./components/Courses/index";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/corporates" component={Corporates} />
        <Route exact path="/trainers" component={Trainers} />
        <Route exact path="/courses" component={Courses} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
