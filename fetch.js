
//1.JSON()------>stringify,parse

const student={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakaia rongbuzz']
}

const studentJson = JSON.stringify(student);
console.log(student)
console.log(studentJson)

const studentObj = JSON.parse(studentJson)
console.log(studentObj)

// 2.fetch
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data));

//keys,value
const keys = Object.keys(student);
const values = Object.values(student);


//for
const numbers =[23,54,67,87,23,78]
numbers.forEach(num=>console.log(num))
numbers.map(num=>num*2);

//for of on array on object
//loop on an object using for in


// add or remove from an array
const products =[
    {
        name:'laptop',
        price:3200,
        brand:'lenovo',
        color:'silver'
    },
    {
        name:'Phone',
        price:120000,
        brand:'iPhone',
        color:'purple'
    },
    {
        name:'watch',
        price:320,
        brand:'rolex',
        color:'gold'
    },
    {
        name:'sun-glass',
        price:3000,
        brand:'ribon',
        color:'black'
    },
    {
        name:'camera',
        price:18200,
        brand:'nikon',
        color:'gray'
    }
];

const newProduct = {name:'webcame',prices:700,brand:'lal'}

//copy products array and then add newProduct

const newProducts=[...products,newProduct]
// console.log(newProducts)

//creat a new array without 1 specific item
//remove phone means creat a new array without the phone
const remining = products.filter(p=>p.name !=='phone')
console.log(remining)  

