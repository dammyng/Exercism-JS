//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (value) => {
  let result = ""
  factors.forEach(element => {
    if(value % element == 0)
      result += RainStringMap[element]
  });
  return result == "" ? value.toString() : result
};

let factors = [3,5,7]
let rainStingMap = {
3:"Pling",
5:"Plang",
7:"Plong"
}