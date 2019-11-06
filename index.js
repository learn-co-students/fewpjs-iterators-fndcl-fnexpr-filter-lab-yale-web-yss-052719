function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return (driver === (string.charAt(0).toUpperCase() + string.slice(1)) || driver === (string.charAt(0).toLowerCase() + string.slice(1)))
    })
}

function fuzzyMatch(array, str) {
    return array.filter(driver => {
        return driver.startsWith(str)
    })
}

function matchName(array, string) {
    return array.filter(object => {
        if (object.name === string){
            return object
        }
    })
}