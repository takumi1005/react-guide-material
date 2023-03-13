import { useState } from "react";

const Example = () => {
	const animals = ["Dog", "Cat", null, "Rat"];

	const [filterVal, setFilterVal] = useState("");

	return (
		<>
			<input
				type="text"
				value={filterVal}
				onChange={(e) => setFilterVal(e.target.value)}
			/>
			<ul>
				{animals
					.filter((animal) => {
						// Null合体演算子
						const animalStr = animal ?? "";
						const isMatch = animalStr.indexOf(filterVal) !== -1;
						return isMatch;
					})
					.map((animal) => {
						// if (animal === "Dog") {
						// 	return <li key={animal}>{animal + "★"}</li>;
						// } else {
						// 	return <li key={animal}>{animal}</li>;
						// }
						return (
							<li key={animal}>
								{
									// 三項演算子
									// animal === "Dog" ? animal + "★" : animal
									// Null合体演算子
									animal ?? "null,undefinedでした"
									// &&条件
								}{" "}
								{animal === "Dog" && "★"}
							</li>
						);
					})}
			</ul>
		</>
	);
};

export default Example;
