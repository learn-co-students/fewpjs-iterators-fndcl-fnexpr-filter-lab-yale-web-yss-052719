// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => {
        return driver[0].toLowerCase() === string[0].toLowerCase()
    })
}

function matchName(drivers, string){
    return drivers.filter(driver => {
        return driver.name === string
    })
}