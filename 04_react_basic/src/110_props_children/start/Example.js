import Container from "./components/Container";
import Profile from "./components/Profile";

const profile = [
	{ name: "Takashi", age: 19, country: "Japan" },
	{ name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
	return (
		<div>
			<Container title="Childrenとは？">
				<Profile {...profile[0]} />
				<Profile {...profile[1]} />
			</Container>
		</div>
	);
};

export default Example;
