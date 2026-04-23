let str = "ANNA"

function isPalindrome(){
    str = str.replace(/\W/g,'')
    str = str.toLowerCase();

    return str = str.split('').reverse().join('');
}

if(isPalindrome) {
    console.log("True");
} else {
    console.log("False");
}