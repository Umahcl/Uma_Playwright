function occurence(num:number):number
{
const nums = [2,4,5,2,1,2]
let count = 0

for(let i = 0; i < nums.length; i++){
    if(nums[i] === num)
    {
        count++
    }
}
return count;

}
console.log(`occurence of 2 is ${occurence(2)}`)
console.log(`occurence of 4 is ${occurence(4)}`)
console.log(`occurence of 5 is ${occurence(5)}`)
console.log(`occurence of 1 is ${occurence(1)}`)
