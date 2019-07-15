// Code your solution here
function findMatching(drivers, string) {
    const matching = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return matching
}

function fuzzyMatch(drivers, string) {
    const length = string.length
    const matching = drivers.filter(driver => {
        let lowercaseDriver = driver.toLowerCase()
        let lowercaseString = string.toLowerCase()
        return lowercaseDriver.substring(0, length) === lowercaseString.substring(0, length)
    })
    return matching
}

function matchName(drivers, string) {
    const matching = drivers.filter(driver => {
        return driver.name === string
    })
    return matching
}