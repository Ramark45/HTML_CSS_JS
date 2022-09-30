const value1=10;
const value2=500;
const value3=2092;
let highestValue;
    if(value1>=value2 && value1>=value3)
    {
        highestValue=value1;
    }
    else if(value2>=value1 && value2>=value3){
        highestValue=value2;
    }
    else{
        highestValue=value3;
    }
console.log("Highest Value is :"+highestValue);