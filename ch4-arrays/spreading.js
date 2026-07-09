const initialArr = [1, 2 , 3];
const copyArr = [...initialArr];

const extendedArray = [0, ...initialArr, 4];
const chars = [..."Hello"];
console.log(copyArr);
console.log(extendedArray);
console.log(chars);