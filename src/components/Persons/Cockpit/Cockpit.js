import React, { useEffect, useRef, useContext } from "react";
import classes from "./cockpit.css";
import AuthContext from "../../../context/auth-context";

const Cockpit = (props) => {
	const ToggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);

	console.log(authContext.authenticated)

	useEffect(() => {
		console.log("[Cockpit.js] useEffect");
		// Http request..
		const timer = setTimeout(() => {
			alert("Saved data to cloud!");
		}, 500);
		// ToggleBtnRef.current.click();
		return () => {
			clearTimeout(timer);
			console.log("[Cockpit.js] cleanup work in useEffect");
		};
	}, []);

	useEffect(() => {
		console.log("[Cockpit.js]2 useEffect");
		return () => {
			console.log("[Cockpit.js] cleanup work in 2nd useEffect");
		};
	});

	const assignedClasses = [];
	let buttonClass = "";
	if (props.showPerson) {
		buttonClass = classes.Behind;
	}

	if (props.personLength <= 2) {
		assignedClasses.push(classes.Red); // classes ['red']
	}

	if (props.personLength <= 1) {
		assignedClasses.push(classes.Bold); // classes ['red', 'bold']
	}
	return (
		<div className={classes.Cockpit}>
			<h1>Hello World</h1>
			<p className={assignedClasses.join(" ")}>Hi let's learn React</p>
			<button ref={ToggleBtnRef} className={buttonClass} onClick={props.clicked}>
				Toggle Person
			</button>
			<button onClick={authContext.Login}>Log in</button>
		</div>
	);
};
// note <AuthContext.Consumer>{(context) => <button onClick={context.Login}>Log in</button>}</AuthContext.Consumer>
// Note <button onClick={props.Login}></button>
export default React.memo(Cockpit);
