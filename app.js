const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#button");
const message = document.querySelector("#error-msg");

button.addEventListener("click", function validateBillAndCashAmount() {
  if (billAmount.value > 0) {
    message.style.display = "none";
    if (cashGiven.value > billAmount.value) {
      const amountToBeReturn = cashGiven.value - billAmount.value;
      console.log(amountToBeReturn);
    } else {
      errorMessage("Enter valid cash given value");
    }
  } else {
    errorMessage("Enter valid Bill Amount");
  }
});

function errorMessage(msg) {
  message.innerText = msg;
  message.style.display = "block";
}
