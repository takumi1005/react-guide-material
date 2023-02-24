import React from "react";
import "./Child.css";

const Child = () => {
	return (
		<React.Fragment>
			<div className="component">
				<h3>Hello Component</h3>
			</div>
			<h3>Hello Fragment</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo
				impedit itaque. Praesentium mollitia maiores repudiandae officia, unde
				harum molestias sit, sequi fuga alias, explicabo ullam officiis. Vitae,
				dolor quibusdam!
			</p>
		</React.Fragment>
	);
};

export default Child;
