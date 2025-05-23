// Sum of Positives
function sumOfPositive(arrayNum){
    let sum=0;
    for (let  i=0;i<arrayNum.length;i++){
        if ( arrayNum[i]>0){
            sum+=arrayNum[i];
        }
    }
    return sum;
    }
 let arrayNumbers=[20,29,56,-65,65,34,32];
 console.log(sumOfPositive(arrayNumbers));


 //Find Maximum Value

 function findMax(num){
    let firstNum=0;
    for (let i=0; i<num.length; i++){
        let currentNum =num[i];
        if (currentNum>firstNum){
            firstNum=currentNum;
        }
    }
return firstNum;

 }
 console.log(findMax([20,23,43,343,4,]));



 // Election winner
function findWinner(candidates){
    let winner;
    let largest = 0;
    for (let i = 0; i < candidates.length; i++){
        if (candidates[i].votes > largest){
            largest = candidates[i].votes
            winner = candidates[i]
        }
    }
    return winner 
}



const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates))

 //4. Longest word
 function longestArray(arr){
    let longest="";
  
    for (let i =0; i<arr.length; i ++){
        if (arr[i].length>longest.length){
            longest=arr[i]
        }
    }
    return longest;
 }
 const str = ["age","gender", "religionn","race","nationality"];
 console.log(longestArray(str));



//  //5. Count Properties
const obj = {
    name: 'willan',
    age: 22,
    city: 'Muranga',
    gender: 'male',
};
const count = Object.entries(obj).length;
console.log("Number of keys :" + count);


//6. Filter by Length
function filterByLength (minLength, number){
    if (minLength>number){
        return minLength;
    }

}

console.log(filterByLength(["africa", "asia", "europe", "north america","antarctica"],5));

//7. Sum of Even Numbers
function sumOfoEvenNumbers(numbers){
    let sum=0;
    for(let i=0; i<numbers.length;i++){
        if (numbers[i]%2===0){
            sum+=numbers[i];
        }
    }
    return sum;
}
console.log(sumOfoEvenNumbers([1,2,3,4,5,6,7,13,12]));

//8. Difference Between Sum of Even and Odd Numbers
function differenceEvenOdds(numbers){
    let sumEven=0;
    let sumOdd=0;
    for(let i=0; i<numbers.length;i++){
        if (numbers[i]%2===0){
            sumEven+=numbers[i];
        }
        else
        if (numbers[i]%2===1){
            sumOdd+=numbers[i];
    }
    
}
return sumEven-sumOdd;
}
console.log(differenceEvenOdds([1,2,3,4,9,6,7,13,12]));

//9. Count Truthy
function countTruthy(obj){
    let Count = 0;
    for (let key in obj) {
        if (obj[key]){
            Count++
        }
    }
    return Count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null, gender: "male" }))

//10. Average of Numbers
const numbers =[23,34,43,34,3,4,34,4];
function findAverage(num){
let sum = 0;
if (num.length===0) return null
for(let i =0;i<num.length;i++){
    sum+=num[i];
}
return sum/num.length;
}
console.log(findAverage(numbers));


//11. Linear Search
function LinearSearch(arr, n, x){
    for (let i =0 ; i<n; i++)
        if (arr [i]==x){
               return i;
       
}
 return -1;
}
 let arr=[29,65,34,23,43,54,56,76];
 let x=10;
 let n=arr.length;
  console.log(LinearSearch(arr,n,x));

  //12. Reverse Linear Search
  
//13. Linear Search All Indices

function getIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(getIndex([28,34,12,23,23,23],34))

//14. Count occurences
function countOccurrences(arr, element){
    let count =  0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]===element){
            count++;}
    }
    return count;
}
console.log(countOccurrences([2,2,3,4,5,6,6,2,5,3,2,5,64,3,3], 2))



//remove Duplicates 
function removeDuplicates(num) {
    const numbersWithoutDuplicates = num.filter((n, i) => {
        return num.indexOf(n) === i;
    });
    return numbersWithoutDuplicates;}
const num = [50,22,67, 42, 23, 91, 22];
const uniqueNumbers = removeDuplicates(num);
console.log(uniqueNumbers); 



//16. Most Frequent
function mostFrequent(array) {
    const frequencyMap = {};
    let maxElement = arr[0];
    let maxCount = 1;
    for (let i = 0; i < arr.length; i++) {
    const element = array[i];
    if (frequencyMap[element]) {
    frequencyMap[element]++;
    } else {
 frequencyMap[element] = 1;
 }
if (frequencyMap[element] > maxCount) {
maxElement = element;
maxCount = frequencyMap[element];
        }
    }
 return maxElement;
}
const arraay = [5, 1, 3, 4, 5, 2, 2, 5, 5, 5, 5];
const result = mostFrequent(arr);
console.log(result); 


