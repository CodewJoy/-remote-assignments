// Assignment 2: Object
// In JavaScript, there are many different sets of syntax for creating objects. In the code below, function parameters are encapsulated into an object, try using at least ​two ways​ to create a proper object as a parameter of the calculate function.

function calculate(args){ 
    let result;
    if (args.op==="+") { 
        result=args.n1+args.n2;
    } else if (args.op==="-") { 
        result=args.n1-args.n2;
    } else {
        result="Not supported";
    }
    return result; 
}

// 1st way : creating object on the fly
calculate({ op: "+", n1: 5, n2:10 });

// 2nd way : use {} to build object / bracket notation
let args2 = { };
args2["op"] = "-";
args2["n1"] = 20;
args2["n2"] = 10;
calculate(args2);

// 3rd way : use new Object() / dot notation
let args3 = new Object();
args3.op = "*";
args3.n1 = 5; 
args3.n2 = 10;
calculate(args3);