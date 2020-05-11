import React from "react";
import "./Logo.css";

class Logo extends React.Component {
	render() {
		console.log(window.location.href);
		return (
			<div style={{ display: this.props.display ? "none" : "" }}>
				<img
					className="logo"
					src={
						this.props.white || window.location.href === "http://localhost:3000/"
							? require("../logos/logo_transparent_white.png")
							: require("../logos/logo_transparent.png")
					}
					alt=""
				/>
			</div>
		);
	}
}

export default Logo;
