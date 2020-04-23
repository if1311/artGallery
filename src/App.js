import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PlainText from "./Components/Plain text";
import { Switch, Route } from "react-router-dom";
import Dummy from "./Components/Dummy";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route path="/Gallery">
          <PlainText />
        </Route>
        <Route path="/Artists" component={Dummy} />
        <Route path="/Contact" component={Dummy} />
        <Route path="/Home" component={PlainText} />
      </Switch>
    </div>
  );
}

export default App;
