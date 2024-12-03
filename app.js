//Take an array of numbers and return the sum.
function calculateSum(numbers) {
    let solution = 0;
    for (let i = 0; i < numbers.length; i++) {
        solution += numbers[i];
    }
    return solution;
}

let numbers = [1, 2, 3, 4, 5];
let solution = calculateSum(numbers);
console.log("Total is " + solution);


//Take an array of numbers and return the average.
function calculateavg(numbers1)
{
    let solution1 = 0;
    let avg;
  for(i=0;i<numbers1.length;i++)
  {
    solution1=solution1+numbers1[i];
    
  }
    avg = solution1/numbers1.length;
    console.log(avg);

    return avg, solution1;

}
let numbers1 = [1, 2, 3, 4, 5];
let solution1 = calculateavg(numbers1);
console.log("Total is " + solution1);

//Take an array of strings and return the longest string.

function findLongestString(strings){

    let longestString = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
            longestString = strings[i];
        }
    }
    return longestString;
}

let strings = ["silver", "veena", "buster", "muskmelon", "kiwi"];
let longestString = findLongestString(strings);
console.log("The longest string is"+" "+longestString);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThanNumber(arraystrings,num)
{
let listofstrings=[];

for(let i=0;i<arraystrings.length;i++){
    if(arraystrings[i].length>num)
        {
            listofstrings.push(arraystrings[i]);
    }
}
return listofstrings;
}
let arraystrings = ["silver", "veena", "bustersko", "muskmelon", "kiwi"];
let num = 4;
let finalStrings=stringsLongerThanNumber(arraystrings,num);
console.log(finalStrings);

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.



function printNumbers(n, current = 1) {
    if (current > n) return;  // Base case: if current number is greater than n, stop recursion
    
    console.log(current); // Print the current number
    printNumbers(n, current + 1); // Recursive call with the next number
}

let n = 20;  // Example number
printNumbers(n);

