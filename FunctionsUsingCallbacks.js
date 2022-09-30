
displayAddition=(callback)=>{
    setTimeout(()=>
    {console.log("Addition"); 
    callback()
   },1000);} 

displayMultiply=(callback)=>{
    setTimeout(()=>
    {console.log("Multiplication"); 
    callback()
   },3000);}

addition=(a,b)=>{
    console.log(a+b);}

multiply=(a,b)=>{
    console.log(a*b);
}
displayAddition(function (){
    addition(10,10);
})

displayMultiply(function (){
    multiply(10,10);
})
