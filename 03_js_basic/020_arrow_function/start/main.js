function fn(number) {
	return number * 2;
}

console.log(fn(2));

//アロー関数
// const fnArrow = (number) => {
// 	return number * 2;
// };

//省略形（複数行、引数が複数ある場合は以下の書き方は出来ないよ）
const fnArrow = (number) => number * 2;

console.log(fnArrow(2));

//オブジェクトを使う場合は下記
const fnArrowObj = (number) => ({ result: number * 2 });
console.log(fnArrowObj(2));
