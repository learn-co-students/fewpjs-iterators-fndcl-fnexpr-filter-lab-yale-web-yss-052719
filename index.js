// Code your solution here

function findMatching(drivers, name){
 return drivers.filter(driver => {
     debugger
    return driver.toLowerCase() === name.toLowerCase()
 })
}


function fuzzyMatch(drivers, letter){
  return drivers.filter(driver => {
     return driver.slice(0,letter.length).toLowerCase() === letter.toLowerCase()
 })
}

function matchName(drivers, name){
 return drivers.filter(driver => {
      return driver.name === name 
    })

}