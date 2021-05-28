function splitString() { 
	if(!str) return [];
	if(str.length % 2) {
		str = str.concat('_');
	}
	let pairCharsArr = str.match(/.{1,2}/g);

	return pairCharsArr;

}
console.log(splitString('abcdefg'));
