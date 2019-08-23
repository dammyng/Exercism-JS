export const meetupDay = (year, month, dayString, description) => {
    const DESCRIPTION_RANGE_MAP = {
        'teenth': [13, 19],
        '1st': [1, 7],
        '2nd': [8, 14],
        '3rd': [15, 21],
        '4th': [21, 27],
        '5th': [28, 31],
        'last': getMonthLastWeekDayRange(year, month)
    }
    var dayRange = DESCRIPTION_RANGE_MAP[description]

    return new Date(year, month, findDay(year, month, dayString, dayRange))
}

let getMonthLastWeekDayRange = (year, month) => {
    var firstDay_in_TheNextMonth = new Date(year, month + 1)
    var lastDay_of_TheMonth = new Date(firstDay_in_TheNextMonth - 1).getDate()

    return [lastDay_of_TheMonth - 6, lastDay_of_TheMonth]
}

let findDay = (year, month, dayString, dayRange) => {
    for (let i = dayRange[0]; i <= dayRange[1]; i++) {
        let possibleDate = new Date(year, month, i)
        let possibleDay = possibleDate.toString().split(" ")[0]
        
        if (possibleDay == dayString.substring(0, 3) && possibleDate.getMonth() == month)
            return i
    }

    throw 'Error'
}