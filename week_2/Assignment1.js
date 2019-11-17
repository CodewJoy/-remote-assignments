// Assignment 1: Function and Array
// Complete the function below to find the ​max number​ of passing numbers. 

// sort first and get the last numbers
// Rest parameters ...numbers turns turns numbers into array
function max(...numbers){
    numbers.sort((x,y)=>(x-y));
    return numbers.slice(-1);
}


// for test
max(5,2,7,1,6);
max(6,2,9,44,77,88,22);