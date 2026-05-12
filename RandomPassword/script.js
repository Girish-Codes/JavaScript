function generatePassword(length, lowerCase, upperCase, numbers, symbols) {

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChar = "0123456789"
    const symbolChars = "!@#$%^&*";

    let allowedChars = "";
    let password = "";

    allowedChars += lowerCase ? lowerCaseChars : "";
    allowedChars += upperCase ? upperCaseChars : "";
    allowedChars += numbers ? numbersChar: "";
    allowedChars += symbols ? symbolChars: "";

    for(let i=0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);
