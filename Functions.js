console.log("Nomal function");
function add()
{
    let a=10;
    let b=20;
    let c=a+b;
    return c;
}
let sum=add();
console.log("Sum vaule is "+sum);

console.log("Using Lambda expression.")
const add1=()=>{
    let a=10;
    let b=20;
    let c=a+b;
    console.log("Sum value is "+c);
}
add1();