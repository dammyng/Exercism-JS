
export class Luhn {
  constructor(value) {
    this.valueNumberArray = [...value.split(' ').join('')].map(Number).reverse()
  }

  get valid() {
  
    if(this.valueNumberArray.length <2)
        return false
    
    const REG = /^\d+$/;
    if (REG.test(this.valueNumberArray.join()))
       return false

   let sum =  doubleSecondItem_BarNine(this.valueNumberArray).reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });

   return sum % 10 ==0
  }
}

const NINE = 9

let doubleSecondItem_BarNine = (valueArray)=>{
  return valueArray.map((value,i)=>{
    if (i % 2 ==1){
       let _2_x_value = value *2 
       return barNine(_2_x_value)
    }
    return value
  })
}



let barNine =(digit)=>{
  return digit > NINE? digit - NINE : digit
}