const arr = [1,2,3,4,5,6,7,8,9,10]

const divisibleOfThree = arr.filter((data)=>data%3 == 0); 
console.log(divisibleOfThree);


const firstDivisibleOfThree = arr.filter((data)=>data%3 == 0); 
console.log(firstDivisibleOfThree);

const  sumOfArr = arr.reduce((data, acc)=>{
    acc +=data;
    return acc;
}, 0);
console.log(sunOfArr);


