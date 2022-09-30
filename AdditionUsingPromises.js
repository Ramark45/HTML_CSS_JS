addNum=()=>{

    return new Promise((resolve,reject)=>{

        let a = 10

        let b = 20

        let c = a + b

      setTimeout(()=>{console.log("Adding: "+c);},500);        

      resolve();})

    }



subNumber=()=>{

    return new Promise((resolve,reject)=>{

        let a = 10

        let b = 20

        let c = b - a

        if(c)

        {

        setTimeout(()=>{console.log("Subtract the number: "+c);},1000);

        resolve();

        }

        else
        reject("Error occured here");})
        ;}

        mulNum=()=>{

            return new Promise((resolve,reject)=>{
                let a = 10
                let b = 20
                let c = a * b
        
                setTimeout(()=>{console.log("Multiplying Number: "+c);},1000); resolve();})}
        
        addNum().then(mulNum).then(subNumber).catch((err)=>{console.log("Exception : "+err)});