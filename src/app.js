import { component, useState, useRef } from "@pionjs/pion";
import { html } from "lit-html";
import { allStyles } from "./styles.css.js";
import { useToast } from "./components/Toast.js";
import { SearchForm } from "./components/SearchForm.js";
import { CocktailResults } from "./components/CocktailResults.js";
import { ShoppingList } from "./components/ShoppingList.js";
import { useShoppingList } from "./hooks/useShoppingList.js";
import { CocktailService } from "./services/cocktailService.js";
import { PrintService } from "./services/printService.js";

function MainApp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();

  const { showToast, renderToaster } = useToast();
  const {
    shoppingList,
    addedCocktails,
    addIngredientsToShoppingList,
    removeCocktailFromShoppingList,
    clearShoppingList,
  } = useShoppingList();

  const performSearch = async (query) => {
    setError("");

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    showToast("Searching for cocktails...", "info");

    try {
      const results = await CocktailService.searchCocktails(query);

      if (results.length > 0) {
        setSearchResults(results);
        showToast(
          `Found ${results.length} cocktail${results.length !== 1 ? "s" : ""}!`,
          "success"
        );
      } else {
        setSearchResults([]);
        setError("No cocktails found for your search.");
        showToast(
          "No cocktails found. Try a different search term.",
          "warning"
        );
      }
    } catch (err) {
      setError("Failed to fetch cocktails. Please try again.");
      setSearchResults([]);
      showToast(
        "Connection error. Please check your internet and try again.",
        "error"
      );
      console.error("Search error:", err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddIngredients = (drink) => {
    const ingredientCount = addIngredientsToShoppingList(drink);
    showToast(
      `Added ${ingredientCount} ingredients from ${drink.strDrink}`,
      "success"
    );
  };

  const handleRemoveIngredients = (cocktailId) => {
    const cocktailName = removeCocktailFromShoppingList(cocktailId);
    if (cocktailName) {
      showToast(
        `Removed ${cocktailName} ingredients from shopping list`,
        "info"
      );
    }
  };

  const handleClearShoppingList = () => {
    clearShoppingList();
    showToast("Shopping list cleared", "info");
  };

  const handlePrintShoppingList = () => {
    const success = PrintService.printShoppingList(shoppingList);
    if (success) {
      showToast("Print dialog opened", "info");
    } else {
      showToast("Shopping list is empty", "warning");
    }
  };

  const handleSearch = () => {
    performSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setError("");
    inputRef.current?.focus();
  };

  return html`
    <style>
      ${allStyles}
    </style>
    <div class="container">
      <h1>Cocktail Shopping List</h1>
      <div class="main-container">
        <div class="search-container">
          ${SearchForm({
            searchQuery,
            setSearchQuery,
            isSearching,
            onSearch: handleSearch,
            onClear: handleClearSearch,
            inputRef,
          })}
        </div>
        <div class="results-container">
          ${CocktailResults({
            isSearching,
            error,
            searchResults,
            addedCocktails,
            onAddIngredients: handleAddIngredients,
            onRemoveIngredients: handleRemoveIngredients,
          })}
          ${ShoppingList({
            shoppingList,
            onClearList: handleClearShoppingList,
            onPrintList: handlePrintShoppingList,
          })}
        </div>
      </div>
    </div>
    ${renderToaster()}
  `;
}

customElements.define("main-app", component(MainApp));

export { MainApp };
