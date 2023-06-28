// Function Types(parameter,return,anonymous/callback)
// function signature,optional parameter/default parameter


// implicitly any type ... no return means void
function add(num1: number,num2: number):void{
    console.log(num1+num2)
}

add(10,20);


// return type number
function multiply (num1:number[],num2:number):number{
    return num1[0]*num2;
}

const result = multiply([10],20);// arrow 0 index 10
console.log(result);

// arrow function
const divisible = (num1:number,num2:number):number=>{
    return num1/num2;
}

const res = divisible(10,2);
console.log(res);

const mul = (num1:number,num2:number,num3?:number):number=>{
    return num1 * num2 * (num3 || 0)
}
const mulRes = mul(12,13,2);
console.log(mulRes);

const add1 = (...numbers:number[]):number=>{
    return numbers.reduce((pre,curr)=>pre+curr,0);
}
const result1 = add1(10,20,23,23);
console.log(result1);
