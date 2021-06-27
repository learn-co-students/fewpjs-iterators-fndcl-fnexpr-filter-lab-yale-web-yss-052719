// Code your solution here
function findMatching(drivers, string) {
    let matches = drivers.filter(e => {
        return e.toLowerCase() === string.toLowerCase()
    })
    return matches
}

function fuzzyMatch(drivers, string) {
    let matches = drivers.filter(e => {
        return e.startsWith(string)
    })
    return matches
}

function matchName(drivers, string) {
    let matches = drivers.filter(e => {
        return e.name === string
    })
    return matches
} 