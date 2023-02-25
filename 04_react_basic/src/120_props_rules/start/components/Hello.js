const Hello = (props) => {
	// props.name = "Bob"; // これは出来ないよ
	return (
		<div>
			<h3>Hello {props.name}</h3>
		</div>
	);
};

export default Hello;
