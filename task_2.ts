// Function to check if a number is a palindrome
function isPalindrome(a: number): boolean {
  let temp: number = a;      // Store original number
  let ldig: number;          // Last digit
  let rev: number = 0;       // Reversed number

  while (temp != 0) {
    ldig = temp % 10;                // Get last digit
    rev = rev * 10 + ldig;           // Add digit to reversed number
    temp = Math.floor(temp / 10);    // Remove last digit
  }
  if(rev === a) return true;         // Check if original and reversed are same
  else return false;
}

console.log("Palindrome numbers: ");

// Loop from 1 to 100
for(let i:number = 1; i <= 100; i++){
    if(isPalindrome(i))              // Print if palindrome
        console.log(i);  
}
