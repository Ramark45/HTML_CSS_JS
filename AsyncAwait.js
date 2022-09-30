addition=(a,b)=>{
  setTimeout(()=>{console.log("Addition"+(a+b));},2000);}
  
subtraction=(a,b)=>{
  setTimeout(()=>{console.log("Subtraction"+(a-b)); },2000);} 

multiplication=(a,b)=>{
  setTimeout(()=>{console.log("Multiplication"+(a*b));},3000);}

async function menu()
{
  await multiplication(10,10);
  await addition(10,10);
  await multiplication(10,10);
  await subtraction(10,10);
}

menu().then(()=>{
  setTimeout(()=>{console.log("Everything working fine");},1000);
});