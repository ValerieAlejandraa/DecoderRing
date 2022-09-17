const caesarModule = (function () {
  const limit = { // 0-25 || 25-0
    start: 'a'.charCodeAt(), 
    end: 'z'.charCodeAt(),
  }
  function caesar(input, shift, encode = true){
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    if (!encode) shift *= -1; 
    input = input.toLowerCase();
    let finalMessage = "";
    //loop through the message
    for (let idx = 0; idx < input.length; idx++) {  // end <--> start
      // if the character is not a letter, add it to the final message aka accumulator/ empty string (the spaces)
      if (input[idx].charCodeAt() < limit.start || input[idx].charCodeAt() > limit.end) { // if not a letter 0-25 || 25-0
        finalMessage += input[idx]; // Spaces should be maintained throughout, as should other non-alphabetic symbols.
      } 
      // if the character is a letter, shift it
      else {
        let shiftedAlphabet = input[idx].charCodeAt() + shift; // For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".
        // if the shifted letter is greater than the end of the alphabet, wrap it around to the beginning
        if (shiftedAlphabet > limit.end) {
          shiftedAlphabet = limit.start + (shiftedAlphabet - limit.end - 1);
        }
        // if the shifted letter is less than the beginning of the alphabet, wrap it around to the end
        else if (shiftedAlphabet < limit.start) {
          shiftedAlphabet = limit.end - (limit.start - shiftedAlphabet - 1);
        }
        // add the shifted letter to the final message
        finalMessage += String.fromCharCode(shiftedAlphabet);
      }
    }
    console.log("finalMessage", finalMessage);
    return finalMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

