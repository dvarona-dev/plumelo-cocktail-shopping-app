import { html } from "lit-html";

export function ShoppingList({ shoppingList, onClearList, onPrintList }) {
  const ingredientsList = Object.values(shoppingList);

  return html`
    <div class="shopping-list">
      <div
        style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;"
      >
        <h3 style="margin: 0;">Shopping List</h3>
        ${ingredientsList.length > 0
          ? html`<button class="btn btn-primary btn-sm" @click=${onPrintList}>
              Print List
            </button>`
          : ""}
      </div>
      ${ingredientsList.length === 0
        ? html`<div class="empty-state">
            <p>No ingredients added yet.</p>
          </div>`
        : html`
            <div
              class="shopping-list-actions"
              style="margin-top: 0; margin-bottom: 1rem; padding-top: 0; border-top: none;"
            >
              <button
                class="btn btn-danger"
                style="width: 100%;"
                @click=${onClearList}
              >
                Clear All
              </button>
            </div>
            <div>
              ${ingredientsList.map(
                (ingredient) => html`
                  <div class="ingredient-item">
                    <div class="ingredient-info">
                      <div class="ingredient-name">${ingredient.name}</div>
                      ${ingredient.measure
                        ? html`<div class="ingredient-measure">
                            ${ingredient.measure}
                          </div>`
                        : ""}
                    </div>
                    ${ingredient.count > 1
                      ? html`<span class="ingredient-counter"
                          >x${ingredient.count}</span
                        >`
                      : ""}
                  </div>
                `
              )}
            </div>
          `}
    </div>
  `;
}
