let solution = [
	[4, 3, 5, 2, 6, 9, 7, 8, 1],
	[6, 8, 2, 5, 7, 1, 4, 9, 3],
	[1, 9, 7, 8, 3, 4, 5, 6, 2],


	[8, 2, 6, 1, 9, 5, 3, 4, 7],
	[3, 7, 4, 6, 8, 2, 9, 1, 5],
	[9, 5, 1, 7, 4, 3, 6, 2, 8],


	[5, 1, 9, 3, 2, 6, 8, 7, 4],
	[2, 4, 8, 9, 5, 7, 1, 3, 6],
	[7, 6, 3, 4, 1, 8, 2, 5, 9]
]

const GRID_SIZE = 9
const VALID_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function checkSolution() {

	
	let rowMatch

	for (let i = 0; i < GRID_SIZE; i++) {
		rowMatch = checkDigits(solution[i].join(''))

		if (rowMatch == false) {
			console.log("This row fails", solution[i])
			return false
		}
	}
	return true
}


let checkDigits = (str) => {
	let isDigitsFine = true

	// if no unknown character / two digit character
	if (str.length == GRID_SIZE) {

		for (let i = 0; i < str.length; i++) {
			let digitValue = str.charAt(i)

			// check if a valid digit
			if (digitValue && VALID_DIGITS.indexOf(parseInt(digitValue)) > -1) {

				// check if it repeats
				if (str.indexOf(digitValue) != str.lastIndexOf(digitValue)) {
					return false
				}
			} else {
				return false
			}
		}
	} else {
		return false
	}

	return isDigitsFine
}

// initialize
let isSolutionCorrect = checkSolution()

if (isSolutionCorrect == false) {
	console.log('The solution is WRONG')
} else {
	console.log("You Solved the Suduku")
}