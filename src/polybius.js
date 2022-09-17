// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.
//when decoding the message, each pair of numbers is translated using the coordinates
const encoder = {
  a: "11",
  b: "21",
  c: "31",
  d: "41",
  e: "51",
  f: "12",
  g: "22",
  h: "32",
  i: "42",
  j: "42",
  k: "52",
  l: "13",
  m: "23",
  n: "33",
  o: "43",
  p: "53",
  q: "14",
  r: "24",
  s: "34",
  t: "44",
  u: "54",
  v: "15",
  w: "25",
  x: "35",
  y: "45",
  z: "55",
};
const decoder = {
  11: "a",
  21: "b",
  31: "c",
  41: "d",
  51: "e",
  12: "f",
  22: "g",
  32: "h",
  42: "i/j",
  52: "k",
  13: "l",
  23: "m",
  33: "n",
  43: "o",
  53: "p",
  14: "q",
  24: "r",
  34: "s",
  44: "t",
  54: "u",
  15: "v",
  25: "w",
  35: "x",
  45: "y",
  55: "z",
};
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    if (encode) {
      //this block of code encodes a message
      let result = ""; //this is where we will put the encoded message
      let message = input.toLowerCase(); //capital letters can be ignored
      for (let i = 0; i < message.length; i++) {
        result += encoder[message[i]] || message[i];
      }
      return result;
    }
    // isOdd by taking the length of the input and dividing it by 2
    const isOdd = input.split(" ").join("").length % 2 !== 0; // 7 % 2 = 1
    if (isOdd) return false; //if false, it would exit the function , return early
    //join("") puts the elements of an array together , input isn't an array, so split makes it into an array
    //"hello world" -> ["hello", "world"]-> "helloworld"->.length doesn't start with 0,

    // if(input.length % 2 === 0) { //if it is even
    let result = ""; //our input are numbers right now
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        result += input[i];
        //i-- //decrement by 1, adding one space, our loop is iterating two spaces
        i = i - 1; //hello world
      } else {
        let digit1 = input[i]; // input[i] -> input[0] -> 1  //1456
        let digit2 = input[i + 1]; // input[1] -> 4
        let doubleDigit = digit1.concat(digit2); //`${}${}` --> 14

        result += decoder[doubleDigit]; //-> decoder[14]
      }
    }
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

//the polybius function has two parameters:
//input: refers to the inputted text to be encoded or decoded
//encode: refers to whether you should encode or decode the message
//by default, it is set to true
//when building the function keep the following in mind
//you are welcome to assume that no additional symbols will be included as part of the input
//only spaces and letters will be included

//when encoding your output should still be a string

//when decoding, the number of characters in the string excluding spaces should be given
//otherwise return false
// spaces should be maintained throughout
//capital letters can be ignored

//the letters I and J share a space
//when encoding, both letters can be converted to 42
//when decoding, both letters can be should be shown
