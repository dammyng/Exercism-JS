//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (value) => {
  let vLength = String(value).length
  let sum = null

    for (let index = 0; index < vLength; index++) {
      sum += getDigit(value, index) ** vLength
    }
    if(sum && sum == value)
      return true
    return false
};


 let getDigit = (number,n) => {
  let digit =  parseInt(String(number).charAt(n))
  return digit
}
