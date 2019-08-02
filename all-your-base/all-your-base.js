//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (bits, from, to) => {
  let sum = 0
  let result = []



  if (to == 10) {
    bits.reverse()
    bits.forEach((element, index) => {
      //console.log(sum)
      sum += element * Math.pow(from, index)
    });
    result = toDigits(sum)

  } else {
    var digit = toSingleDigit(bits, from)
    if (digit == 0){
      result = [0]
      throw new Error('Input has wrong format')
    }
    while (digit > 0) {
      var m = digit % to
      let q = (digit - m) / to
      console.log(m)
      digit = q
      result.push(m)
    }
    result = result.reverse()
  }



  return result
};

function toSingleDigit(bits, from) {
  var sum = 0
  bits.reverse().forEach((element, index) => {
    sum += element * Math.pow(from, index)
  });
  return sum
}

function toDigits(singleDigit, result = []) {
  String(singleDigit).split("").forEach(element => {
    result.push(Number(element))
  });
  return result
}