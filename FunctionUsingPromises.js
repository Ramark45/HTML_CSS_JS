addition=()=>{
    return new Promise((resolve,reject)=>{
        let a = 10
        let b = 20
        let c = a + b
      setTimeout(()=>{console.log("Addition value is: "+c);},500);        
      resolve();})
    }
subtraction=()=>{
    return new Promise((resolve,reject)=>{
        let a = 10
        let b = 20
        let c = b - a
        if(c)
        {
        setTimeout(()=>{console.log("Subtraction Value is: "+c);},1000);
        resolve();
        }
        else
        reject("Error occured here");})
        ;}
addition().then(subtraction).then(addition).catch((err)=>{console.log("Exception : "+err)});