import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ArtistList from "./components/ArtistList";
import ArtistList2 from "./components/ArtistList2";
import ArtistModal from "./components/ArtistModal";
import ArtistDetails from "./components/ArtistDetails";

function App() {
  return (
    <div>
      {/* <Switch>
        <Route path="/Modal" component={ArtistModal} />
        <Route path="/Artists" component={ArtistDetails} />
      </Switch> */}
      <ArtistList />
    </div>
  );
}
export default App;
