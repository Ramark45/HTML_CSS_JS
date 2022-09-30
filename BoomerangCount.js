function BoomerangCounter(arr) {
	let count = 0;
	for(let i = 2; i<arr.length; i++){
		if(arr[i] == arr[i-2] && arr[i]!==arr[i-1]){
			count++;
		}
	}
	return count;
}

console.log(BoomerangCounter([3, 7, 3]));
console.log(BoomerangCounter([9, 5, 9, 5, 1, 1, 1]));
console.log(BoomerangCounter([5, 6, 6, 7, 6, 3, 9]));
console.log(BoomerangCounter([4, 4, 4, 9, 9, 9, 9]));