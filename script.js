document.addEventListener("DOMContentLoaded", function () {
  const price = document.querySelector("[name='purchasePrice']");
  const checkbox = document.querySelector("[name='chkBx']");
  const comboCreditCard = document.querySelector("[name='creditCard']");

  price.addEventListener("change", checkPrice);
  checkbox.addEventListener("change", checkCheckbox);

  function checkPrice() {
    if (price.value > 200) {
      if (checkbox.checked === true) {
        checkbox.checked = false;
      }
      checkbox.disabled = true;
    } else {
      checkbox.disabled = false;
    }
  }
  function checkCheckbox() {
    if (checkbox.checked === true) {
      comboCreditCard.required = false;
    }
  }
});
