//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (duo) => {
  return Number(duo.map(item=> COLORS.indexOf(item)).join(''))
};

 const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]
