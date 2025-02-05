document.getElementById('search-bar').addEventListener('input', function(e) {
  const searchText = e.target.value.toLowerCase();
  const restaurants = document.querySelectorAll('.restaurant');

  restaurants.forEach(restaurant => {
    const restaurantName = restaurant.querySelector('h3').textContent.toLowerCase();
    if (restaurantName.includes(searchText)) {
      restaurant.style.display = 'block';
    } else {
      restaurant.style.display = 'none';
    }
  });
});
