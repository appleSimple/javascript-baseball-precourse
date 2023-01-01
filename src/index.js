export default function BaseballGame() {

	/** 랜덤 숫자 생성 함수 */
	const makeRandomNumbers = (count) => {
		let randomNumbers = [];
		let n = 0;

		while (n < 3) {
			const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
			if (randomNumbers.includes(randomNumber)) {
				randomNumbers.pop();
				n--;
			} else {
				randomNumbers.push(randomNumber);
				n++;
			}
		}

		return randomNumbers;
	};

	/** 입력값 배열 반환 */
	const getInputArr = (input) => {
		const _input = `${input}`;
		const inputArr = _input.split('', 3);

		return inputArr;
	};

	/** 중복 체크 */
	const checkOverlap = (input) => {
		const _inputArr = getInputArr(input);

		let el = _inputArr.pop();
		if (!_inputArr.includes(el)) {

			el = _inputArr.pop();
			if (!_inputArr.includes(el)) {
				return false;
			}
		}

		return true;
	};

	/** 길이 및 타입 체크 */
	const checkLengthType = (input) => {
		const _inputArr = getInputArr(input);

		if (typeof input !== 'number' || _inputArr.length !== 3) {
			return true;
		}

		return false;
	};

	const correct = (input) => {
		let strikeList = [];
		
		let n = 0;
		while (n < 3) {
			if (getInputArr(input)[n] === makeRandomNumbers(3)[n]) {
				strikeList.push(true)
			} else {
				strikeList.push(false);
			}

			n++;
		}

		return strikeList;
	};

	/** 정답 제출 */
	const submitAnswer = (input) => {
		if (checkOverlap(input) || checkLengthType(input)) {
			alert('규칙을 지키십시오.');
			return;
		}
	};

	console.log('makeRandomNumbers', makeRandomNumbers(3));
	console.log('correct(142)', correct(333));
	
}

BaseballGame();