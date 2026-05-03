const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

document.getElementById("increaseBtn").onclick = function() {
    count++;
    document.getElementById("counterLabel").textContent = count;
}

document.getElementById("decreaseBtn").onclick = function() {
    count--;
    document.getElementById("counterLabel").textContent = count;
}

document.getElementById("resetBtn").onclick = function() {
    count=0;
    document.getElementById("counterLabel").textContent = count;
}