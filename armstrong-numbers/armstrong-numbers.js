//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = value => {
  let vArray = [...String(value)];
  let sum = 0;

  vArray.forEach((_, index) => {
    sum += getDigit(value, index) ** vArray.length;
  });

  return sum == value;
};

let getDigit = (number, n) => {
  let digit = parseInt(String(number).charAt(n));
  return digit;
};
