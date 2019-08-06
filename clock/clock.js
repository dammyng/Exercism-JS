//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minutes =0) {
    this.minutes = ((minutes % 60) + 60) % 60
    this.hour = (((hour + (this.normalizeMinutes(minutes))) % 24)  + 24)  % 24
  }

  toString() {
    return  this.padZero(this.hour) + ":" +  this.padZero(this.minutes)
  }

  plus(value) {
    return new Clock(this.hour, this.minutes + value);
  }

  minus(value) {
    return this.plus(-value);
  }

  equals(value) {
    return this.toString() === value.toString();
  }

  padZero(time){
    return time.toString().length == 1? `0${time}` : time
  }

  normalizeMinutes(minutes){
    return  (minutes -  this.minutes % 60) / 60
  }

  normalizeHour (){
    
  }
}
