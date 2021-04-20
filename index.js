// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(driver => {
    return driver.toUpperCase() === string.toUpperCase();
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => {
    return driver[0].toUpperCase() === string[0].toUpperCase();
  })
}

function matchName(drivers, string) {
  return drivers.filter(driver => {
    return driver.name === string
  })
}
