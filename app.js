const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#button");
const message = document.querySelector("#error-msg");
const availableNotes = [500, 200, 100, 50, 20, 10, 1];
const noOfNotes = document.querySelectorAll(".number-of-note");

button.addEventListener("click", function validateBillAndCashAmount() {
  if (billAmount.value > 0) {
    message.style.display = "none";
    if (cashGiven.value > billAmount.value) {
      const amountToBeReturn = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturn);
    } else {
      errorMessage("Enter valid cash given value");
    }
  } else {
    errorMessage("Enter valid Bill Amount");
  }
});

function calculateChange(amountToBeReturn) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
    amountToBeReturn = amountToBeReturn % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function errorMessage(msg) {
  message.innerText = msg;
  message.style.display = "block";
}
