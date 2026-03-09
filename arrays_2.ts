const array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const numcounts:number[] = [];

for (const n of array) {
  numcounts[n] = numcounts[n] ? numcounts[n] + 1 : 1;
}

console.log(`count of 5 is ${numcounts[5]}, count of 2 is ${numcounts[2]}, count of 9 is ${numcounts[9]}, count of 4 is ${numcounts[4]}`);

