const athensTemperature = 30;
const lamiaTemperature = 25;

const tempDiff = athensTemperature - lamiaTemperature;
const absDiff = tempDiff < 0 ? -tempDiff : tempDiff;

console.log(`Absolute diff is ${absDiff}`)