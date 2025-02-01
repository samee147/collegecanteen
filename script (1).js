// Search Functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const dishes = document.querySelectorAll(".card");

  dishes.forEach((dish) => {
    const dishName = dish.querySelector(".card-title").textContent.toLowerCase();
    if (dishName.includes(searchTerm)) {
      dish.style.display = "block";
    } else {
      dish.style.display = "none";
    }
  });
});

// Sort By Functionality
const sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", (e) => {
  const sortValue = e.target.value;
  const menuGrid = document.getElementById("menuGrid");
  const dishes = Array.from(menuGrid.querySelectorAll(".card"));

  dishes.sort((a, b) => {
    const priceA = parseFloat(a.querySelector(".card-text strong").textContent.replace("₹", ""));
    const priceB = parseFloat(b.querySelector(".card-text strong").textContent.replace("₹", ""));
    const nameA = a.querySelector(".card-title").textContent.toLowerCase();
    const nameB = b.querySelector(".card-title").textContent.toLowerCase();

    switch (sortValue) {
      case "priceLowToHigh":
        return priceA - priceB;
      case "priceHighToLow":
        return priceB - priceA;
      case "nameAtoZ":
        return nameA.localeCompare(nameB);
      case "nameZtoA":
        return nameB.localeCompare(nameA);
      default:
        return 0;
    }
  });

  // Clear and re-append sorted dishes
  menuGrid.innerHTML = "";
  dishes.forEach((dish) => menuGrid.appendChild(dish));
});

// Load More Functionality
const loadMoreBtn = document.getElementById("loadMoreBtn");
const additionalMenuGrid = document.getElementById("additionalMenuGrid");

loadMoreBtn.addEventListener("click", () => {
  // Show the next 5 dishes
  const hiddenDishes = additionalMenuGrid.querySelectorAll(".col-md-3");
  for (let i = 0; i < 5; i++) {
    if (hiddenDishes[i]) {
      hiddenDishes[i].style.display = "block";
    }
  }

  // Hide the "Load More" button if all dishes are shown
  if (additionalMenuGrid.querySelectorAll(".col-md-3[style='display: none;']").length === 0) {
    loadMoreBtn.style.display = "none";
  }
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dishName = button.closest(".card").querySelector(".card-title").textContent;
    alert(`${dishName} added to cart!`);
  });
});