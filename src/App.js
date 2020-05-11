import React from "react";
import "./App.css";

import ArtistList from "./components/ArtistList";

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
