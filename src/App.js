import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{ id: "lalala1", name: "Aldo", age: 18 },
			{ id: "lalala2", name: "cepot", age: 19 },
			{ id: "lalala3", name: "cukil", age: 20 },
		],
		otherState: "some other value",
		showPerson: false,
	};

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

		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPerson;
		this.setState({ showPerson: !doesShow });
	};

	render() {
		// cara outsourcing untuk menghasilkan content yang efisien
		let persons = null;

		if (this.state.showPerson) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id} // cara lebih efisien use Key
								change={(event) => this.nameChangeHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			// style.backgroundColor = "#1e1e7b";
			// style[":hover"] = {
			// 	backgroundColor: "#d6d6f5",
			// 	color: "black",
			// };
		}

		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push("red"); // classes ['red']
		}
		if (this.state.persons.length <= 1) {
			classes.push("bold"); // classes ['red', 'bold']
		}

		return (
			<div className="App">
				<h1>Hello World</h1>
				<p className={classes.join(" ")}>Hi let's learn React</p>
				<button className="button" onClick={this.togglePersonsHandler}>
					Toggle Person
				</button>

				{persons}
			</div>
		);
	}

	// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi Aldo!"));
}

export default App;
