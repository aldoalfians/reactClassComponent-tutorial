// const App = (props) => {
// 	const [personState, setPersonState] = useState({
// 		persons: [
// 			{ name: "Aldo", age: 18 },
// 			{ name: "cepot", age: 19 },
// 			{ name: "cukil", age: 20 },
// 		],
// 		otherState: "some other value",
// 	});

// 	const switchNameHandler = () => {
 		// console.log("YESSS!!");
 		// DON'T DO THIS: this.state.persons[0].name = "Aldo Alfiansyah"

// 		setPersonState({
// 			persons: [
// 				{ name: "Aldo Alfiansyah", age: 18 },
// 				{ name: "cepot", age: 29 },
// 				{ name: "cukil", age: 20 },
// 			],
// 		});
// 	};

// 	return (
		// JSX
 		// Membuat komponen sendiri (Person)
// 		<div className="App">
// 			<h1>Hello World</h1>
// 			<p>Hi let's learn React</p>
// 			<button onClick={switchNameHandler}>Switch Name</button>
// 			<Person name={personState.persons[0].name} age={personState.persons[0].age} />
// 			<Person name={personState.persons[1].name} age={personState.persons[1].age} />
// 			<Person name={personState.persons[2].name} age={personState.persons[2].age}>
// 				My Hobbies: Swimming
// 			</Person>
// 		</div>
// 	);

// 	// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi Aldo!"));
// };

// export default App;