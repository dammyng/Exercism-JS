//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  var regex = /([a-z])(?!.*\1)/g;
  return (sentence.toLowerCase().match(regex) || []).length >= 26;
};
