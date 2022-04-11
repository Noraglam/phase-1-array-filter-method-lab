const drivers =['Bobby','Sammy', 'Sally','Annette','Sarah','bobby']
function findMatching(arr,string) {
    let newArray =[]
    for(let driver of arr) {
        if (driver === string) {
    
            newArray.push (driver)  
      }
    }
     return newArray
}

console.log (findMatchingdrivers(drivers,"Bobby"))

     
      function fuzzyMatch(array, string){
    let newArray = array.filter(element => {
        //debugger
        return element[0] ==="S"

    })
    return newArray
}

fuzzyMatch(drivers, "Sa")

    
      

    