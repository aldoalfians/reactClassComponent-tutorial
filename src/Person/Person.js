import React from "react";
import styled from "styled-components";
// import "./Person.css";

// const person = () => {
// Math.floor = Pembulatan, Math.random = random 0 - 1
// Kalo tidak di bungkus dengan {} pada jsx untuk menjalankan kode js maka akan tetap text
// return <p>I'm a Person and I am Math.floor(Math.random() * 18) years old</p>;
//     return <p>I'm a Person and I am {Math.floor(Math.random() * 18)} years old</p>;

// };
// use styled componenets
const StyledDiv = styled.div`
	width: 60%;
	margin: 16px auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 16px;
	text-align: center;

	@media (min-width: 500px) {
		width: 450px;
	}
`;

const person = (props) => {
	// const style = {
	// 	"@media(min-width: 500px)": {
	// 		width: "450px",
	// 	},
	// };

	// Working with props & children props
	return (
		// <div className="Person" style={style}>
		<StyledDiv>
			<p onClick={props.click}>
				I'm a {props.name} and I am {props.age} years old
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} value={props.name} />
		</StyledDiv>
	);
};



export default person;
