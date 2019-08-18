//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = value => {
  let vArray = [...String(value)];
  let sum = 0;

  vArray.forEach(char =>
    sum += parseInt(char) ** vArray.length
  );

  return sum == value;
};

