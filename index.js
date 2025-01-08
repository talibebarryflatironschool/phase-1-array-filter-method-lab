function findMatching(driverNames,name ){
    return driverNames.filter(( driver )=>{
        return driver.toLowerCase() === name.toLowerCase()
    })
}
function fuzzyMatch(driverNames,letters){
    return driverNames.filter((driver)=>{
        return driver.slice(0, letters.length) === letters
     })
}
function matchName(driverObjects, name){
    return driverObjects.filter(( driver )=>{
        return driver.name === name
    })
}