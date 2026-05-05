const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess A Number between ${minNum} - ${maxNum}`)
    guess = Number(guess);
    
    if(isNaN(guess)) {
        window.alert("Enter a valid number: ");
    } else if(guess < minNum || guess > maxNum) {
        window.alert(`Enter a number between ${minNum} - ${maxNum}`)
    } else {
        attempts++;
        if(guess < answer) {
            window.alert("TO LOW!")
        } else if( guess > answer) {
            window.alert("TO HIGH!")
        } else {
            window.alert(`Congrats! The answer ${answer}! guess in ${attempts} attempts. `)
            running = false;
        }
    }    
}