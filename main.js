<script>
  const searchInput = document.getElementById('search');
  const recommendationsContainer = document.querySelector('.recommendations');

  searchInput.addEventListener('keyup', async (event) => {
    const searchTerm = event.target.value;
    if (searchTerm.length > 2) {
      // Fetch recommendations from your backend API using the search term
      const response = await fetch(`/api/recommendations?q=${searchTerm}`);
      const recommendedItems = await response.json();

      // Clear existing recommendations
      recommendationsContainer.innerHTML = '';

      // Display fetched recommendations in the container
      recommendedItems.forEach(item => {
        const recommendationElement = document.createElement('div');
        recommendationElement.classList.add('recommendation');
        recommendationElement.innerHTML = `
          <p><strong>Product:</strong> ${item.name}</p>
          <p><strong>Link:</strong> <a href="${item.url}">${item.url}</a></p>
        `;
        recommendationsContainer.appendChild(recommendationElement);
      });
    } else {
      // Clear recommendations if search term is less than 3 characters
      recommendationsContainer.innerHTML = '';
    }
  });
</script>
