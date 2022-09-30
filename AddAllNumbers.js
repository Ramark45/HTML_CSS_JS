function addElements(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum=sum+i;
    }
    return sum;
  }
console.log(addElements(4));