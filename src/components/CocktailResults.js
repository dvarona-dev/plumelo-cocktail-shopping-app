import { html } from "lit-html";

export function CocktailResults({
  isSearching,
  error,
  searchResults,
  addedCocktails,
  onAddIngredients,
  onRemoveIngredients,
}) {
  if (isSearching) {
    return html`
      <div class="empty-state">
        <div class="spinner" style="margin: 0 auto 1rem;"></div>
        <p>Searching for cocktails...</p>
      </div>
    `;
  }

  if (error) {
    return html`
      <div class="empty-state">
        <p>❌ ${error}</p>
      </div>
    `;
  }

  if (searchResults.length === 0) {
    return html`
      <div class="empty-state">
        <p>Start by searching for your favorite cocktail!</p>
      </div>
    `;
  }

  return html`
    <div class="results-list">
      ${searchResults.map(
        (drink) => html`
          <div class="result-item">
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
            <div class="result-content">
              <h3>${drink.strDrink}</h3>
              <p>${drink.strInstructions}</p>
              <div class="result-actions">
                ${addedCocktails[drink.idDrink]
                  ? html`<button
                      class="btn btn-danger"
                      @click=${() => onRemoveIngredients(drink.idDrink)}
                    >
                      Remove Ingredients
                    </button>`
                  : html`<button
                      class="btn btn-success"
                      @click=${() => onAddIngredients(drink)}
                    >
                      Add Ingredients
                    </button>`}
              </div>
            </div>
          </div>
        `
      )}
    </div>
  `;
}
