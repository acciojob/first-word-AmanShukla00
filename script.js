function firstWord(s) {
  let s=s.trim().split(" ");
	for(let i=0;i<=s.length;i++){
		let firstword=s[0];
		return firstword;
	}
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
