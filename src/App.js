import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About/index";
import Corporates from "./components/Corporates/index";
import Contact from "./components/Contact/index";
import Courses from "./components/Courses/index";
import CiscoSdWan from "./components/CiscoSdWan";
import CcnaCourse from "./components/CcnaCourse";
import Banner from "./components/Banner";

import "./App.css";

import Footer from "./components/Footer/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/corporates" component={Corporates} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/ciscosdwan" component={CiscoSdWan} />
        <Route exact path="/ccna" component={CcnaCourse} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
