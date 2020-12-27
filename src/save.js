// JSX
// Membuat komponen sendiri (Person)
// <div className="App">
// 	<h1>Hello World</h1>
// 	<p>Hi let's learn React</p>
// 	<button>Switch Name</button>
// 	<Person name="Aldo" age="18" />
// 	<Person name="cepot" age="19" />
// 	<Person name="cukil" age="19">
// 		My Hobbies: Swimming
// 	</Person>
// </div>

// USE CLASS
// class App extends Component {
// 	state = {
// 		persons: [
// 			{ name: "Aldo", age: 18 },
// 			{ name: "cepot", age: 19 },
// 			{ name: "cukil", age: 20 },
// 		],
// 		otherState: "some other value",
// 		showPerson: false,
// 	};

// 	switchNameHandler = (newName) => {
// console.log("YESSS!!");
// DON'T DO THIS: this.state.persons[0].name = "Aldo Alfiansyah"

// 		this.setState({
// 			persons: [
// 				{ name: newName, age: 18 },
// 				{ name: "cepot", age: 29 },
// 				{ name: "cukil", age: 20 },
// 			],
// 		});
// 	};

// 	nameChangeHandler = (event) => {
// 		this.setState({
// 			persons: [
// 				{ name: "Aldo", age: 18 },
// 				{ name: "cepot", age: 29 },
// 				{ name: event.target.value, age: 20 },
// 			],
// 		});
// 	};

// 	togglePersonsHandler = () => {
// 		const doesShow = this.state.showPerson;
// 		this.setState({showPerson: !doesShow})
// 	}

// 	render() {
// 		const style = {
// 			backgroundColor: "white",
// 			font: "inherit",
// 			border: "1px solid blue",
// 			padding: "8px",
// 			cursor: "pointer",
// 		};
// 		return (
// JSX
// Membuat komponen sendiri (Person)
// 			<div className="App">
// 				<h1>Hello World</h1>
// 				<p>Hi let's learn React</p>
// 				<button style={style} onClick={this.togglePersonsHandler}>
// 					Toggle Person
// 				</button>

// 				{ // Operator Ternary ----- Kalo make vue use v-if --- Klo di react use {} dikasih kondisinya apa
// 					this.state.showPerson === true ?

// 					<div>
// 						<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
// 						<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
// 						<Person
// 							name={this.state.persons[2].name}
// 							age={this.state.persons[2].age}
// 							click={this.switchNameHandler.bind(this, "ALDO!!!")}
// 							change={this.nameChangeHandler}
// 						>
// 							My Hobbies: Swimming
// 						</Person>
// 					</div> : null
// 				}
// 			</div>
// 		);
// 	}

// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi Aldo!"));
// }

// export default App;

//  CREATE CLASSNAME CSS
// let classes = ["red", "bold"].join(" ");

// 		return (
// JSX
// Membuat komponen sendiri (Person)
// 			<div className="App">
// 				<h1>Hello World</h1>
// 				<p className={classes}>Hi let's learn React</p> // red
// 				<button style={style} onClick={this.togglePersonsHandler}>
// 					Toggle Person
// 				</button>
// 				{persons}
// 			</div>
// 		);

// Radium
// const person = (props) => {
// 	const style = {
// 		"@media(min-width: 500px)": {
// 			width: "450px",
// 		},
// 	};

 	// Working with props & children props
// 	return (
 		// <div className="Person" style={style}>
// 		<StyledDiv>
// 			<p onClick={props.click}>
// 				I'm a {props.name} and I am {props.age} years old
// 			</p>
// 			<p>{props.children}</p>
// 			<input type="text" onChange={props.change} value={props.name} />
// 		</StyledDiv>
// 	);
// };

//use STYLED COMPONENTS

// const StyledButton = styled.button`
// 	background-color: ${(props) => (props.alt ? "#1e1e7b" : "#0086b3")};
// 	color: white;
// 	font: inherit;
// 	border: 1px solid blue;
// 	padding: 8px;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: ${(props) => (props.alt ? "#d6d6f5" : "#a366ff")};
// 		color: black;
// 	}
// `;

// let persons = null;

// 		if (this.state.showPerson) {
// 			persons = (
// 				<div>
// 					{this.state.persons.map((person, index) => {
// 						return (
// 							<Person
// 								click={() => this.deletePersonHandler(index)}
// 								name={person.name}
// 								age={person.age}
// 								key={person.id} // cara lebih efisien use Key
// 								change={(event) => this.nameChangeHandler(event, person.id)}
// 							/>
// 						);
// 					})}
// 				</div>
// 			);

// style.backgroundColor = "#1e1e7b";
// style[":hover"] = {
// 	backgroundColor: "#d6d6f5",
// 	color: "black",
// };
// }
// <div>
// <StyledButton alt={this.state.showPerson} onClick={this.togglePersonsHandler}>
// 			Toggle Person
// 		</StyledButton>

// </div>

// export default person;




// NOT PROJECT STRUCTURE 
// class App extends Component {
// 	state = {
// 		persons: [
// 			{ id: "lalala1", name: "Aldo", age: 18 },
// 			{ id: "lalala2", name: "cepot", age: 19 },
// 			{ id: "lalala3", name: "cukil", age: 20 },
// 		],
// 		otherState: "some other value",
// 		showPerson: false,
// 	};

// 	deletePersonHandler = (personIndex) => {
// 		// const persons = this.state.persons; // tidak efisien
// 		// const persons = this.state.persons.slice(); // efisien
// 		const persons = [...this.state.persons]; // efisen use modern js ES6 spread operator
// 		persons.splice(personIndex, 1); // delete 1 one element array
// 		this.setState({ persons: persons });
// 	};

// 	nameChangeHandler = (event, id) => {
// 		const personIndex = this.state.persons.findIndex((p) => {
// 			return p.id === id;
// 		});

// 		const person = {
// 			...this.state.persons[personIndex], // use spread operator
// 		};
// 		// const person = Object.assign({}, this.state.persons[personIndex])

// 		person.name = event.target.value;

// 		const persons = [...this.state.persons];
// 		persons[personIndex] = person;

// 		this.setState({ persons: persons });
// 	};

// 	togglePersonsHandler = () => {
// 		const doesShow = this.state.showPerson;
// 		this.setState({ showPerson: !doesShow });
// 	};

// 	render() {
// 		// cara outsourcing untuk menghasilkan content yang efisien
// 		let persons = null;
// 		let btnClass = " ";
// 		if (this.state.showPerson) {
// 			persons = (
// 				<div>
// 					{this.state.persons.map((person, index) => {
// 						return (
// 							<Person
// 								click={() => this.deletePersonHandler(index)}
// 								name={person.name}
// 								age={person.age}
// 								key={person.id} // cara lebih efisien use Key
// 								change={(event) => this.nameChangeHandler(event, person.id)}
// 							/>
// 						);
// 					})}
// 				</div>
// 			);

// 			btnClass = classes.Behind;
// 		}

// 		let assignedClasses = [];
// 		if (this.state.persons.length <= 2) {
// 			assignedClasses.push(classes.red); // classes ['red']
// 		}

// 		if (this.state.persons.length <= 1) {
// 			assignedClasses.push(classes.bold); // classes ['red', 'bold']
// 		}

// 		return (
// 			<div className={classes.App}>
// 				<h1>Hello World</h1>
// 				<p className={assignedClasses.join(" ")}>Hi let's learn React</p>
// 				<button className={btnClass} onClick={this.togglePersonsHandler}>
// 					Toggle Person
// 				</button>

// 				{persons}
// 			</div>
// 		);
// 	}

// 	// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi Aldo!"));
// }

// export default App;