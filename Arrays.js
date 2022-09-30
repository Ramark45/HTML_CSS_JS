const myArray=[1,2,3,4,5,6];
let myArray1=new Array(6);
let myArray2=Array(5);
console.log(myArray.reverse());

let myMap=new Map();
myMap.set("one",1);
myMap.set("two",2);
myMap.set("three",3);
console.log(myMap);
console.log(myMap.get("two"));
myMap.delete("three");
console.log(myMap)

for(let [key,value]of myMap){
    console.log(key+" associated with "+value);
}