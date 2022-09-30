function myfunction(){
const array1=[1,2,3,4,5];
const array2=[6,4,8,7,7,5,9];
const array3=[...array1,...array2];
console.log("Meged array is :"+array3);

const array4=[...new Set([...array3])];
console.log("Array without duplicates :"+array4);

const array5=array4.sort();
console.log("Sorted array in Ascending order :"+array5);
}

myfunction();