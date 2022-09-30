function SetToArray(...args){
    
    let array=[...mySet];
    console.log("Coverted array is "+array);
}
let mySet=new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    mySet.add(4);
    mySet.add(5);
    console.log("Set is :"+ mySet);

    SetToArray(mySet);