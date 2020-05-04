import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PlainText from "./components/PlainText";
import { Switch, Route } from "react-router-dom";
import ArtistList from "./components/ArtistList";
import ArtistModal from "./components/ArtistModal";
import ArtistDetails from "./components/ArtistDetails";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Switch>
        <Route path="/Modal" component={ArtistModal} />
        <Route path="/Artists" component={ArtistDetails} />
      </Switch> */}
      <ArtistList />
    </div>
  );
}
export default App;
