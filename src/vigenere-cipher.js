const CustomError = require("../extensions/custom-error");
const ALPHABET_LENGTH = 26;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		
/*
Если n  — количество букв в алфавите, mj— буквы открытого текста, k{J} — буквы ключа, то шифрование Виженера можно записать следующим образом:
cj = (mj + kj) mod n

Расшифровка:
mj = (cj + n -kj) mod n
 */
class VigenereCipheringMachine {
  
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    let result = '';

    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error();
    }
  
    let newKey = '';

    while (newKey.length < message.length) {
      newKey += key;
    }

    newKey = newKey.toUpperCase();
    message = message.toUpperCase();
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (ALPHABET.indexOf(message[i]) > -1) {
        const mi = ALPHABET.indexOf(message[i]);
        const kj = ALPHABET.indexOf(newKey[j]);
        const ci = (mi + kj ) % ALPHABET_LENGTH;
        const c = ALPHABET[ci];
        result += c;
        j++;
      } else {
        result += message[i];
      }
    }
    if (this.isDirect) 
      return result; 
    else 
      return result.split('').reverse().join('');
  }    
  decrypt(message, key) {
    let result = '';

    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error();
    }
  
    let newKey = '';

    while (newKey.length < message.length) {
      newKey += key;
    }

    newKey = newKey.toUpperCase();
    message = message.toUpperCase();
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (ALPHABET.indexOf(message[i]) > -1) {
        const mi = ALPHABET.indexOf(message[i]);
        const kj = ALPHABET.indexOf(newKey[j]);
        const ci = (ALPHABET_LENGTH + (mi - kj )) % ALPHABET_LENGTH;
        const c = ALPHABET[ci];
        result += c;
        j++;
      } else {
        result += message[i];
      }
    }
    if (this.isDirect) 
    return result; 
  else 
    return result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
