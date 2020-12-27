import React, { Component } from "react";
import Cockpit from "./components/Persons/Cockpit/Cockpit";
import classes from "./App.css";
import Persons from "./components/Persons/Persons";
import auxClass from "./hoc/auxClass";
import Auxiliary from "./hoc/Auxiliary";
import AuthContext from "./context/auth-context";

class App extends Component {
	constructor(props) {
		super(props);
		console.log("[App.js] constructor");
	}

	state = {
		persons: [
			{ id: "lalala1", name: "Aldo", age: 18 },
			{ id: "lalala2", name: "cepot", age: 19 },
			{ id: "lalala3", name: "cukil", age: 20 },
		],
		otherState: "some other value",
		showPerson: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log("[App.js] getDerivedStateFromProps", props);
		return state;
	}

	componentDidMount() {
		console.log("[App.js] componentDidMount");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("[App.js] shouldComponentUpdate ");
		return true;
	}

	componentDidUpdate() {
		console.log("[App.js] componentDidUpadte");
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons; // tidak efisien
		// const persons = this.state.persons.slice(); // efisien
		const persons = [...this.state.persons]; // efisen use modern js ES6 spread operator
		persons.splice(personIndex, 1); // delete 1 one element array
		this.setState({ persons: persons });
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex], // use spread operator
		};
		// const person = Object.assign({}, this.state.persons[personIndex])

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1,
			};
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPerson;
		this.setState({ showPerson: !doesShow });
	};

	loginHandler = () => {
		this.setState({ authenticated: true });
	};

	render() {
		console.log("[App.js] render");

		// cara outsourcing untuk menghasilkan content yang efisien
		let persons = null;
		if (this.state.showPerson) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler}
					isAuthenticated={this.state.authenticated}
				/>
			);
		}

		return (
			<Auxiliary>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				<AuthContext.Provider value={{ authenticated: this.state.authenticated, Login: this.loginHandler }}>
					{this.state.showCockpit ? (
						<Cockpit
							showPerson={this.state.showPerson}
							personLength={this.state.persons.length}
							clicked={this.togglePersonsHandler}
							// Login={this.loginHandler}
						/>
					) : null}

					{persons}
				</AuthContext.Provider>
			</Auxiliary>
		);
	}

	// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi Aldo!"));
}

export default auxClass(App, classes.App);
