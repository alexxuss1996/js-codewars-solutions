function printerError(s) {
	let stringLength = s.length;
	let rangeRE = /[a-m]/g;

	let matchCount = ((s || "").match(rangeRE) || []).length;
	let errorsCount = stringLength - matchCount;

	return errorsCount + "/" + stringLength;
}

console.log(printerError("aaaaaaaaffffggggggggeeeeeeetttxbe"));