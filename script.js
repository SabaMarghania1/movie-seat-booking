const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeeds = document.querySelectorAll(".row .seat.selected");
  const selectedCount = selectedSeeds.length;

  count.textContent = selectedCount;
  total.textContent = selectedCount * ticketPrice;
}

container.addEventListener("click", e => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
