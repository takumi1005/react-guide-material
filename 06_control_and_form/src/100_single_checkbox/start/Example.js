import { useState } from "react";

const Example = () => {
	const [isChecked, setIsChecked] = useState(true);
	const toggleChecked = (e) => {
		setIsChecked((prevState) => !prevState);
	};
	return (
		<>
			<label htmlFor="my-check">
				チェック：
				<input
					type="checkbox"
					id="my-check"
					checked={isChecked}
					onChange={(e) => toggleChecked(e)}
				/>
				<div>{isChecked ? "ON!" : "OFF!"}</div>
			</label>
		</>
	);
};

export default Example;
