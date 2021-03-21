// import local files
import getSolution from './getSolution.js'

const GRID_SIZE = 9
const VALID_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// get the solution and then check for its validity
function checkSolution() {
	const solution = getSolution()

	for (let i = 0; i < GRID_SIZE; i++) {
		if (checkDigits(solution[i].join('')) == false) {
			console.log("This row fails", solution[i])
			return false
		}
	}
	return true
}

const checkDigits = (str) => {
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

	return true
}

// initialize
checkSolution() == false ? console.log('The solution is WRONG') : console.log("You Solved the Suduku")