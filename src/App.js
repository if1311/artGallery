import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PlainText from "./Components/Plain text";
import { Switch, Route } from "react-router-dom";
import Dummy from "./Components/Dummy";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dummy} />

        <Route path="/Gallery" component={Dummy} />

        <Route path="/Artists" component={PlainText} />

        <Route path="/Contact" component={Dummy} />
      </Switch>
    </div>
  );
}

export default App;
