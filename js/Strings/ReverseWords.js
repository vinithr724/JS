function reverseWords(sentence) {
  return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Example usage:
console.log(reverseWords("Java J2EE Reverse Me")); // Output: "avaJ EE2J esreveR eM"
