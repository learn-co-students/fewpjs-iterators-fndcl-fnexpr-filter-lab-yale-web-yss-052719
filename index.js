function findMatching(array, name) {
	return array.filter(driver => {
		return driver.toLowerCase() === name.toLowerCase()
	})
}

function fuzzyMatch(array, substr) {
	return array.filter(driver => {
		return driver.substring(0, substr.length) === substr
	})
}

function matchName(array, string) {
	return array.filter(driver => {
		return driver.name === string
	})
}