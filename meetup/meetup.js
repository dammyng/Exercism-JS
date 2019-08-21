export const meetupDay = (year, month, dayString, description) => {
    if(description == "last"){
    return new Date(year, month, normalizeLast(year, month, dayString))
}
else{
    var d = DAY_RANGE_MAP[description]

    

    return new Date(year, month, normalizeDay( d, year, month, dayString, description))
}
}

let normalizeDay = (range, year, month, dayString) => {
    for (let index = range[0]; index <= range[1] ; index++) {
        let dateCheck =  new Date(year, month, index).toString().split(" ")
        if (dateCheck[0] == dayString.substring(0, 3)) 
            return index
    }
}


let normalizeLast = ( year, month, dayString) => {
    var lastDate = new Date(year, month+ 1)
    var lastDay = new Date(lastDate - 1).getDate()
    let range = [lastDay -6, lastDay]

    for (let index = range[0]; index <= range[1] ; index++) {
        let dateCheck =  new Date(year, month, index).toString().split(" ")
        if (dateCheck[0] == dayString.substring(0, 3)) 
            return index
    }

}


const DAY_RANGE_MAP = {
    'teenth': [13,19],
    '1st':[1,7],
    '2nd':[8,14],
    '3rd':[15,21],
    '4th':[21,28],
    '5th':[29,31],
    'last':[5,5]
}