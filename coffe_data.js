// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu

// // let keys = Object.keys(coffeeMenu);

// // console.log(keys);

// console.log(names.values);

// //2. print an array of all the drinks on the menu 
// const coffeeNames = coffeeMenu.map(coffee => coffee.name);
// console.log(coffeeNames);

// //3. print array of drinks that cost 5 and under 
// const underFive = (item) => {
//     return item.price <=5;
// }
// const itemsUnderFive = coffeeMenu.filter(underFive);
// console.log(itemsUnderFive);

//4. print an array of drinks that are priced at an even number 
let even = [];
coffeeMenu.forEach(element=>{if(element%2==0) even.push(element);})

console.log(`Even numbers in an array are: ${even}`);

// printEven(coffeeMenu.price);

// function printEven(a){
//     let i;
//     for (i=0; i<price.length;i++){
//         if (i%2 ===0){
//             console.log(a[i]);
//         }
//     }
// }
// function menu(array){
//     const even = [];

//     array.forEach(number=> {
//         if(number%2===0){
//             even.push(number)
//         }
//     });
//     return even;
// }
// const even = menu(coffeeMenu);
// console.log(even);

// const evenPrice = (item) => {
//    for (let index=0; index <coffeeMenu.length; index++){
//     if (coffeeMenu[index]%2!==0){
//         odd.push(arr[index]);
//     }
//    }
// }
// console.log(evenPrice);

// const itemEvenPrice = coffeeMenu.filter(evenPrice);
// console.log(itemEvenPrice);