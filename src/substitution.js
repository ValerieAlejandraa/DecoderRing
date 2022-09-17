// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //encode: we want to loop through the given input, for each character in the input, example H ,
  // we want the number(index) , which is 7, we want to use that number [7] to get the letter or character in the substitution alphabet(26 letters)
  //we want the result to be lowercase
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  function messageIndexer(standardAlphabet, inputMessage, subAlphabet) {
    // input or inputMessage is "Hello World !"
    let finalMessage = "";
    inputMessage = inputMessage.toLowerCase();
    for (let letter of inputMessage) {
      let oneIndex = standardAlphabet.indexOf(letter); //we are getting the index of h, which is 7 in the standardAlphabet
      finalMessage += subAlphabet[oneIndex] || letter; //here we are getting the of oneIndex which is 7,we have a number, so we just use bracket notation instead of indexOf() and checking the the index of the subAlphabet, this process will decode
    }
    return finalMessage; //if the letter is a space we will skip line 16,because spaces are not in the standard alphabet, and we will add it to the final message
  }

  function alphabetHasDuplicates(characters) {
    //characters is just a parameter, it is empty right now until we add an argument (subAlphabet/alphabet)
    let result = "";
    for (let char of characters) {
      if (result.includes(char)) {
        return true;
      }
      result += char;
    }
  }
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || alphabetHasDuplicates(alphabet))return false;

    if (encode) return messageIndexer(standardAlphabet, input, alphabet);
    return messageIndexer(alphabet, input, standardAlphabet); //decode, we want to get the index of a single char in the input, by reaching the given unorganized alphabet , and then using that index number to reach the organize alphabet
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
