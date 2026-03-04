//using array function - Input Listen Silentyou kindly repeat on browser con
let isAnagram = (String1, String2)=>{

    let lowerCaseString1 = String1.toLowerCase();
    let lowerCaseString2 = String2.toLowerCase();

    let String1Len = lowerCaseString1.length;
    let String2Len = lowerCaseString2.length;

    console.log(`The lowercase Strings are ${lowerCaseString1} and ${lowerCaseString2}`);

    if(String1Len != String2Len)
    {
        console.log("The given Strings are not anagram");
        return false;
    }
   
    //sort the strings
    let sortedString1 = lowerCaseString1.split('').sort();
    let sortedString2 = lowerCaseString2.split('').sort();

    console.log(`the sortedstring is ${sortedString1}`)

     for (let i = 0; i < String1Len; i++)
     {
         if (sortedString1[i] != sortedString2[i])
            return false;
    }

    return true;
    }

let String1 = process.argv[2]; //Listen
let String2 = process.argv[3]; //Silent

console.log(`The gvn Strings are ${String1} and ${String2}`);

let retValue = isAnagram(String1, String2);
if(retValue)
    console.log("The given Strings are anagram")
else
    console.log("The given Strings are not anagram")