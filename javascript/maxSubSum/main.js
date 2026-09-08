import {MaxSubSum} from './maxSubSum.js'

let maxSubSum = new MaxSubSum();
let arr = [4, -5, 6, 7, 11, -3, 2];

console.log(`array length ("n") is ${arr.length}`);
const variants = [ "brute", "kadane", "karol", "foobar" ];
for(let variant of variants){
  if(!maxSubSum[variant]){
    console.error(variant, "unsupported");
    continue;
  }
  let result = maxSubSum[variant](arr);
  console.log(variant, result);
}
