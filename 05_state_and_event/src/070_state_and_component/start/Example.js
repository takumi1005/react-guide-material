import { useState } from "react";

const Example = () => {
	const [toggle, setToggle] = useState(true);
	const toggleComponent = () => {
		setToggle((prev) => !prev);
	};
	return (
		<>
			<button onClick={toggleComponent}>toggle</button>
			{/* 同じツリー構造の場合 */}
			{/* コンポーネントを一意に識別する場合にkeyを設定する。keyがないと状態を引き継いでしまう */}
			{toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
		</>
	);
};

const Count = ({ title }) => {
	const [count, setCount] = useState(0);
	const countUp = () => {
		setCount((prevstate) => prevstate + 1);
	};
	const countDown = () => {
		setCount(count - 1);
	};
	return (
		<>
			<h3>
				{title}: {count}
			</h3>
			<button onClick={countUp}>+</button>
			<button onClick={countDown}>-</button>
		</>
	);
};

export default Example;
