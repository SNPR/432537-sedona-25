var orderPopupForm = document.querySelector(".order-popup-form");
var hotelSearchButton = document.querySelector(".hotel-search-button");
orderPopupForm.classList.add("hidden");

if (hotelSearchButton) {
  hotelSearchButton.addEventListener("click", function() {
    orderPopupForm.classList.toggle("hidden");
  });
}
