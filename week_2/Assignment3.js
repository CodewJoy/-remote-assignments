// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the average price of all the products.


function avg(data){
    let total =0; 
    for (let i = 0; i < data.size; i++) {
        total += data.products[i].price;
    }
    return total/data.size;
}
    
avg({
        size:3, 
        products:[
            {name:"Product 1", price:100 },
            {name:"Product 2", price:700 },
            {name:"Product 3", price:250 }
        ]
});