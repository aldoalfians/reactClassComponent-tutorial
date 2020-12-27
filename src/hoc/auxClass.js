import React from "react";

const auxClass = (WrappedComponent, className) => {
	return (props) => (
		<div className={className}>
			<WrappedComponent {...props}/> 
		</div>
	);
};
export default auxClass;
