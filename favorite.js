document.addEventListener("DOMContentLoaded", function () {
    const STORAGE_KEY = "eloriaFavorites";

    function getFavorites() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    }

    function saveFavorites(favorites) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }

    function updateFavoriteButtons() {
        const favorites = getFavorites();

        document.querySelectorAll(".drink-card[data-id]").forEach(card => {
            const id = card.dataset.id;
            const button = card.querySelector(".eloria-favorite-btn");

            if (!button) return;

            const isFavorite = favorites.some(item => item.id === id);

            button.classList.toggle("is-favorite", isFavorite);
            button.setAttribute("aria-pressed", String(isFavorite));

            button.innerHTML = isFavorite
                ? '<i class="fa-solid fa-heart"></i>'
                : '<i class="fa-regular fa-heart"></i>';
        });

        document.querySelectorAll("[data-favorites-count]").forEach(counter => {
            counter.textContent = favorites.length;
        });
    }

    document.querySelectorAll(".eloria-favorite-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const card = button.closest(".drink-card");
            if (!card) return;

            const id = card.dataset.id;
            const image = card.querySelector("img");
            const name = card.querySelector("h3");
            const price = card.querySelector(".drink-price");
            const ukrainianName = card.querySelector(".ukrainian-name");
            const paragraphs = card.querySelectorAll("p:not(.ukrainian-name)");

            let favorites = getFavorites();
            const existingIndex = favorites.findIndex(item => item.id === id);

            if (existingIndex !== -1) {
                favorites.splice(existingIndex, 1);
            } else {
                favorites.push({
                    id: id,
                    name: name ? name.textContent.trim() : id,
                    ukrainianName: ukrainianName
                        ? ukrainianName.textContent.trim()
                        : "",
                    price: price ? price.textContent.trim() : "",
                    image: image ? image.getAttribute("src") : "",
                    description: paragraphs.length
                        ? paragraphs[0].textContent.trim()
                        : ""
                });
            }

            saveFavorites(favorites);
            updateFavoriteButtons();
        });
    });

    updateFavoriteButtons();
});