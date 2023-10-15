// Code your solutions in this file
// Function to write thank you cards using a for loop
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a positive integer using a while loop
  function countDown(n) {
    while (n >= 0) {
      console.log(n);
      n--;
    }
  }
  
//   // Example usage of the writeCards function
//   const names = ["Charlie", "Samip", "Ali"];
//   const eventName = "birthday";
//   const thankYouMessages = writeCards(names, eventName);
//   console.log("Thank You Messages:");
//   console.log(thankYouMessages);
  
//   // Example usage of the countDown function
//   console.log("\nCounting Down:");
//   countDown(10);
  