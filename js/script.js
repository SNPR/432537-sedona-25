var orderPopupForm = document.querySelector(".order-popup-form");
var hotelSearchButton = document.querySelector(".hotel-search-button");

hotelSearchButton.addEventListener("click", function() {
  orderPopupForm.classList.toggle("hidden");
});
