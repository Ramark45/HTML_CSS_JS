let mySet=new Set();
mySet.add(1);
mySet.add("Ramar");
mySet.add(2);
console.log(mySet);

/*spread operator
... name of the array
unpacks the elements.
*/
const a=[1,2,3,4,5];
const b=[...a,6,7,8,9,10];

console.log(b);

/*
rest operator - backs ur elements
packing the elements
*/

function sum(...args){
    let k=0;
    for(let n of args ){
        k=k+n;
    }
    return k;
}
let r=sum(5,6,7,8);
console.log(r);

