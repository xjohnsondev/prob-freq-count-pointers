// add whatever parameters you deem necessary
function isSubsequence(word, phrase) {
  let pointer = 0;
  while (pointer < word.length - 1) {
    for (let letter of phrase) {
      if (word[pointer] == letter) {
        pointer++;
        if (pointer == word.length) {
          console.log("true");
          return true;
        }
      }
    }
  }
  console.log(false);
  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
