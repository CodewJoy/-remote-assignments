// Assignment 1: Function and Array
// Complete the function below to find the ​max number​ of passing numbers. 

// sort first and get the last numbers
// Rest parameters ...numbers turns turns numbers into array
function max(...numbers){
    bubbleSort (numbers);
    return numbers[numbers.length-1];
}

function bubbleSort (arr) {
    let toIndex = arr.length;
    while (toIndex > 1) {
        toIndex--;
        for (let i = 0; i < toIndex; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

// for test
max(5,2,7,1,6);
max(6,2,9,44,77,88,22);

// //  Method 2
// function max(...numbers){
//     numbers.sort((x,y)=>(x-y));
//     return numbers.slice(-1);
// }

// //  Method 3
// // need to think : i compare with j(all elements in front of numbers[i] in array), which may take more memory
// function max(...numbers){
//     for (let i = 1; i < numbers.length; i++) {
//         for (let j = i-1; j > 0; j--) {
//             let tempory = 0;
//             if (numbers[i] < numbers[j]) {
//                 tempory = numbers[i];
//                 numbers[i] = numbers[j];
//                 numbers[j] = tempory;
//             } 
//         }
//     }
//     return numbers.slice(-1);
// }