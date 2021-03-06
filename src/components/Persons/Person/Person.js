import React, { Component } from "react";
import PropTypes from "prop-types";
import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./Person.css";
import auxClass from "../../../hoc/auxClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;
	componentDidMount() {
		// this.inputElement.focus()
		this.inputElementRef.current.focus(); // with constructor
		console.log(this.context.authenticated);
	}
	render() {
		console.log("[Person.js] rendering..");
		return (
			<Auxiliary>
				{this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
				<p onClick={this.props.click}>
					I'm a {this.props.name} and I am {this.props.age} years old
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					// ref={(inputEl) => {
					// 	this.inputElement = inputEl;
					// }}
					ref={this.inputElementRef} // with constructor
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Auxiliary>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
};
export default auxClass(Person, classes.Person);
