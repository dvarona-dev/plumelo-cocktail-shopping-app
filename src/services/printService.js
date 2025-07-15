export class PrintService {
  static printShoppingList(shoppingList) {
    const ingredientsList = Object.values(shoppingList);

    if (ingredientsList.length === 0) {
      return false;
    }

    const printWindow = window.open("", "_blank", "width=800,height=600");

    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Shopping List</title>
          <style>
            :root {
              --primary-color: #2563eb;
              --text-primary: #1e293b;
              --text-muted: #64748b;
              --border-color: #e2e8f0;
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              margin: 2rem;
              color: var(--text-primary);
              line-height: 1.6;
            }
            
            h2 {
              margin-bottom: 1.5rem;
              color: var(--text-primary);
              font-size: 1.5rem;
              border-bottom: 2px solid var(--primary-color);
              padding-bottom: 0.5rem;
            }
            
            .ingredient-item {
              display: flex;
              gap: 0.25rem;
              align-items: center;
              border-bottom: 1px solid var(--border-color);
            }
            
            .ingredient-item:last-child {
              border-bottom: none;
            }
            
            .ingredient-counter {
              background: var(--primary-color);
              color: white;
              border-radius: 50%;
              padding: 0.25rem 0.5rem;
              font-size: 0.75rem;
              min-width: 28px;
              text-align: center;
            }
            
            .footer {
              margin-top: 2rem;
              padding-top: 1rem;
              border-top: 1px solid var(--border-color);
              font-size: 0.875rem;
              color: var(--text-muted);
            }
          </style>
        </head>
        <body>
          <h2>🛒 Shopping List</h2>
          <div class="ingredients-list">
            ${ingredientsList
              .map(
                (ingredient) => `
              <div class="ingredient-item">
                <span>
                  ${ingredient.name}
                  ${
                    ingredient.measure
                      ? `<em style="color: var(--text-muted);"> (${ingredient.measure})</em>`
                      : ""
                  }
                </span>
                ${
                  ingredient.count > 1
                    ? `<span class="ingredient-counter">x${ingredient.count}</span>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
          </div>
          <div class="footer">
            Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };

    return true;
  }
}
