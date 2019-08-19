export const age = (planet, ageInSeconds) => roundToTwo(ageInSeconds / PLANET_REV_MAP[planet])

let roundToTwo = num => (Math.round(num * 1e2) / 1e2);

const EARTH_REV = 31557600

const PLANET_REV_MAP = {
  "earth": EARTH_REV,
  "mercury": EARTH_REV * 0.2408467,
  "venus": EARTH_REV * 0.61519726,
  "mars": EARTH_REV * 1.8808158,
  "jupiter": EARTH_REV * 11.862615,
  "saturn": EARTH_REV * 29.447498,
  "uranus": EARTH_REV * 84.016846,
  "neptune": EARTH_REV * 164.79132,
}