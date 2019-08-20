export const age = (planet, ageInSeconds) => roundToTwo( ageInSeconds / (EARTH_ORBITAL_PERIOD * ORBITAL_PERIOD_RELATIVE_TO_EARTH[planet]))

let roundToTwo = num => (Math.round(num * 1e2) / 1e2);

const EARTH_ORBITAL_PERIOD = 31557600

const ORBITAL_PERIOD_RELATIVE_TO_EARTH = {
  "earth": 1,
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132,
}