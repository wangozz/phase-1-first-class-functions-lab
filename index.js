// Code your solution in this file!

const returnFirstTwoDrivers= function (array){
    let result = array.slice(0, 2)
    return result  
}

const returnLastTwoDrivers= function (array){
    let result = array.slice(-2)
    return result  
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiple){
    return function(fare){
        return fare*multiple
    } 
}

const fareDoubler= function(fare){
    return fare*2
}

const fareTripler= function(fare){
    return fare*3
}

function selectDifferentDrivers(arrayOfDrivers, selector){
    return selector(arrayOfDrivers)
}
