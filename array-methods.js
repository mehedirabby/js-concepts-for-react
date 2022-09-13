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
]

const brands = products.map(product=>product.brand)
console.log(brands)
const prices = products.map(product=>product.price)
console.log(prices)


products.forEach(product=>console.log(product))
products.forEach(product=>console.log(product.color))

//3.filter
const cheap = products.filter(product=>product.price<5000);
console.log(cheap);

const SpecificName = products.filter(p => p.name.includes('n'))
console.log(SpecificName);
//


const special = products.find(p=>p.name.includes('w'));
console.log(special)