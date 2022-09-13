 

//1.templet string
const numbers = [89,35,98,12];
const student ={
    name:"sakib khan",
    age:32,
    movies:['king khan','dhakaia mastan']
}
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[1]}`;
console.log(about)

//2.arrow function
const getFiftyFive =()=>55;
const addSixtyFive = num=>num+65;
const isEven = x=>x%2==0;
const addThree = (x,y,z)=>x+y+z;
const doMath =(number1,number2)=>{
    const sum = number1+number2;
    return sum;
}
//3.spread operator
const newNumbers = [...numbers];
numbers.push(99);
// console.log(newNumbers)

//creat a new array from an older array and add an element
const currentNumbers = [...numbers,55];
console.log(currentNumbers);