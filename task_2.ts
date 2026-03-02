function isPalindrome(a: number): boolean {
  let temp: number = a;
  let ldig: number;
  let rev: number = 0;

  while (temp != 0) {
    ldig = temp % 10;
    rev = rev * 10 + ldig;
    temp = Math.floor(temp / 10);
  }
  if(rev === a) return true;
  else return false;
}

console.log("Palindrome numbers: ");

for(let i:number = 1; i <= 100; i++){
    if(isPalindrome(i))
        console.log(i);
}
