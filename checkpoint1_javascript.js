// 1. Trouver la valeur la plus élevée dans un tableau
function max(arr) {
  return Math.max(...arr);
}
console.log("Exo 1 - Max Value:");
console.log(max([12, 34, 56, 1]));        // 56
console.log(max([-12, -34, 0, -56, -1])); // 0

// 2. Vérifier si une valeur est un entier
function is_Int(value) {
  return Number.isInteger(value);
}
console.log("\nExo 2 - Integer Check:");
console.log(is_Int(23));      // true
console.log(is_Int(4e2));     // true
console.log(is_Int(NaN));     // false
console.log(is_Int(23.75));   // false
console.log(is_Int(-23));     // true

// 3. Calculer la somme des valeurs dans un tableau
function sum(arr) {
  return arr.filter(Number.isFinite).reduce((a, b) => a + b, 0);
}
console.log("\nExo 3 - Sum of Array:");
console.log(sum([1, 2, 3]));         // 6
console.log(sum([100, -200, 3]));    // -97
console.log(sum([1, 2, 'a', 3]));    // 6

// 4. Trouver le mot le plus long dans une chaîne
function longestWord(str) {
  return str.split(" ").reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log("\nExo 4 - Longest Word:");
console.log(longestWord("Web Development Tutorial")); // "Development"

// 5. Vérifier si un nombre est premier
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("\nExo 5 - Prime Number Check:");
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false

// 6. Trouver le premier caractère non répété
function firstNonRepeatedChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
console.log("\nExo 6 - First Non-Repeated Character:");
console.log(firstNonRepeatedChar("abacddbec")); // "e"

// 7. Vérifier si une entrée est un tableau
function is_array(input) {
  return Array.isArray(input);
}
console.log("\nExo 7 - Is Array Check:");
console.log(is_array("w3resource"));   // false
console.log(is_array([1, 2, 4, 0]));   // true

// 8. Obtenir le premier élément ou les premiers n éléments d'un tableau
function first(arr, n = 1) {
  if (n <= 0) return [];
  return arr.slice(0, n);
}
console.log("\nExo 8 - First Elements:");
console.log(first([7, 9, 0, -2]));      // 7
console.log(first([], 3));             // []
console.log(first([7, 9, 0, -2], 3));  // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));  // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // []

// 9. Joindre les éléments d'un tableau dans une chaîne
function joinArray(arr, separator = ",") {
  return arr.join(separator);
}
console.log("\nExo 9 - Join Array Elements:");
const myColor = ["Red", "Green", "White", "Black"];
console.log(joinArray(myColor, ","));     // "Red,Green,White,Black"
console.log(joinArray(myColor, "+"));     // "Red+Green+White+Black"

// 10. Supprimer un élément spécifique d'un tableau
function remove_array_element(arr, element) {
  return arr.filter(el => el !== element);
}
console.log("\nExo 10 - Remove Array Element:");
console.log(remove_array_element([2, 5, 9, 6], 5)); // [2, 9, 6]

// 11. Trouver les valeurs uniques dans un tableau
function uniqueValues(arr) {
  return [...new Set(arr)];
}
console.log("\nExo 11 - Unique Values:");
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueValues([1, -2, -2, 3, 4, -5, -6, -5])); // [1, -2, 3, 4, -5, -6]
