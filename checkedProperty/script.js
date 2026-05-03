const myCheckbox = document.getElementById("myCheckbox")
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");
const submitbtn = document.getElementById("submitbtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitbtn.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = `You Are Subscribed!`;

        if(visa.checked) {
            paymentResult.textContent = `You are selected Visa for Payment`;
        } else if(masterCard.checked) {
            paymentResult.textContent = `You are selected MasterCard for Payment`;
        } else if(payPal.checked) {
            paymentResult.textContent = `You are selected PapPal for Payment`;
        }

    } else {
        subResult.textContent = `You Are Not Subscribed`;
    }
}