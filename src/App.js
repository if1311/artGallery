import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PlainText from "./components/PlainText";
import { Switch, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import Homepage from "./components/Homepage";

function App() {
	return (
		<div>
			<NavBar />
			<Homepage />
			<Switch>
				<Route exact path="/" component={Dummy} />

				<Route path="/gallery" component={Dummy} />

				<Route path="/artists" component={PlainText} />

				<Route path="/contact" component={Dummy} />
			</Switch>
		</div>
	);
}

export default App;
