// Code your solution here
function findMatching(drivers, string){
  const matchingDrivers = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  })
  return matchingDrivers
}

function fuzzyMatch(drivers, string){
  const matchingDrivers = drivers.filter(driver => {
    return driver.charAt(0).toLowerCase() === string.charAt(0).toLowerCase()
  })
  return matchingDrivers
}

function matchName(drivers, string) {
  const matchingDrivers = drivers.filter(driver => {
    return driver.name === string
  })
  return matchingDrivers
}
