import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PlainText from "./Components/PlainText";
import { Switch, Route } from "react-router-dom";
import Dummy from "./Components/Dummy";
import ArtistList from "./components/ArtistList";

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
    <ArtistList />
    </div>
  );

export default App;
