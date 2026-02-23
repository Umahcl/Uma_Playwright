function reverseString(Stringvalue)
{
    let value = Stringvalue.length;
    let reversedString = '';
   // console.log(value);

    for(let i = value - 1; i >= 0; i--)
    {
      reversedString = reversedString + Stringvalue[i]
    }
    return reversedString;

}
let string_value = process.argv[2];
let reversedString = reverseString(string_value);
console.log(`the original string is ${string_value}`)
console.log(`the reversed string is ${reversedString}`);

//To check if it is a Palindrome
if(string_value === reversedString)
{
    console.log("the given string is a Palindrome")
}
else
    console.log("the given string is not palindrome")