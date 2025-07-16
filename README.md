# Cocktail Shopping List

A tiny web app to help you gather a shopping list for multiple cocktails. Search for cocktails, add their ingredients to a shopping list, and print or clear your list with ease.

## Features

- **Search Cocktails:** Find cocktails by name using data from [TheCocktailDB](https://www.thecocktaildb.com/).
- **View Results:** See cocktail images, instructions, and details.
- **Add Ingredients:** Add all ingredients for a cocktail to your shopping list with one click.
- **Remove Ingredients:** Remove a cocktail's ingredients from your shopping list.
- **Shopping List Management:**
  - View a deduplicated, aggregated list of all needed ingredients.
  - Clear the entire shopping list.
  - Print the shopping list in a clean format.
- **Toasts & Feedback:** Get instant feedback for actions (search, add/remove, print, errors).
- **Responsive UI:** Clean, modern, and responsive design.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd plumelo-cocktail-shopping-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm start
```

- The app will open automatically at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is in use).

### Usage

1. **Search:** Enter a cocktail name and click "Search".
2. **Add Ingredients:** Click "Add Ingredients" on any cocktail to add its ingredients to your shopping list.
3. **Remove Ingredients:** Click "Remove Ingredients" to remove a cocktail's ingredients from your list.
4. **Print:** Click "Print List" to open a print dialog for your shopping list.
5. **Clear:** Click "Clear List" to remove all items from your shopping list.

## Project Structure

```
plumelo-cocktail-shopping-app/
  server.js            # Express server to serve the app
  package.json         # Project metadata and dependencies
  src/
    app.js            # Main app logic (PionJS + lit-html)
    index.html        # App entry point
    styles.css        # Main styles
    styles.css.js     # JS-based styles for PionJS
    components/       # UI components (SearchForm, CocktailResults, ShoppingList, Toast)
    hooks/            # Custom React-like hooks (useShoppingList)
    services/         # Cocktail API and print utilities
```

## Dependencies

- [@pionjs/pion](https://github.com/pionjs/pion) (UI framework)
- [lit-html](https://lit.dev/) (templating)
- [express](https://expressjs.com/) (server)
- [open](https://www.npmjs.com/package/open) (auto-opens browser)

## API

- Uses [TheCocktailDB](https://www.thecocktaildb.com/api.php) for cocktail data (no API key required).

## Configuration

- No environment variables or configuration needed by default.
- The server runs on port `3000` by default (can be overridden with the `PORT` environment variable).

## License

MIT
