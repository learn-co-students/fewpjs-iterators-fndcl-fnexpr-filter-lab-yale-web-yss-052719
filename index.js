// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(function(e){
        let dName = e[0].toUpperCase() + e.slice(1)
        return dName === string
    })

}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(e){
        return e.substring(0, string.length) === string
    })
}

function matchName(drivers, string){
    return drivers.filter(function(e){
        return e.name === string
    })
}