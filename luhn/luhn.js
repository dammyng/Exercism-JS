//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Luhn {
  constructor(value) {
    this.valueArray = [...value.split(' ').join('')].map(i=>Number(i)).reverse()


  }

  get valid() {
  
    if(this.valueArray.length <2)
      return false
    
    const REG = /^\d+$/;
      if (REG.test(this.valueArray.join()))
       return false

   let sum =  doubles(this.valueArray).reduce(function(accumulator, currentValue, currentIndex, array) {
      return accumulator + currentValue;
    });

   return sum % 10 ==0
  }
}

let doubles = (valueArray)=>{
  return valueArray.map((v,i)=>{
    if (i %2 ==1){
       let a = v *2 
       return a >9? a-9 :a
    }
    return v
  })
}