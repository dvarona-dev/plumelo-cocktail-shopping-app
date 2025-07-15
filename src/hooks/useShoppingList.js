import { useState } from "@pionjs/pion";
import { CocktailService } from "../services/cocktailService.js";

export function useShoppingList() {
  const [shoppingList, setShoppingList] = useState({});
  const [addedCocktails, setAddedCocktails] = useState({});

  const addIngredientsToShoppingList = (drink) => {
    const ingredients = CocktailService.extractIngredients(drink);

    setShoppingList((prevList) => {
      const newList = { ...prevList };

      ingredients.forEach((ingredient) => {
        const key = ingredient.name.toLowerCase();
        if (newList[key]) {
          newList[key] = {
            ...newList[key],
            count: newList[key].count + 1,
            cocktails: [...new Set([...newList[key].cocktails, drink.idDrink])],
          };
        } else {
          newList[key] = {
            name: ingredient.name,
            measure: ingredient.measure,
            count: 1,
            cocktails: [drink.idDrink],
          };
        }
      });

      return newList;
    });

    setAddedCocktails((prev) => ({
      ...prev,
      [drink.idDrink]: {
        name: drink.strDrink,
        ingredients: ingredients.map((ing) => ing.name.toLowerCase()),
      },
    }));

    return ingredients.length;
  };

  const removeCocktailFromShoppingList = (cocktailId) => {
    const cocktail = addedCocktails[cocktailId];
    if (!cocktail) return null;

    setShoppingList((prevList) => {
      const newList = { ...prevList };

      cocktail.ingredients.forEach((ingredientKey) => {
        if (newList[ingredientKey]) {
          const updatedCocktails = newList[ingredientKey].cocktails.filter(
            (id) => id !== cocktailId
          );

          if (updatedCocktails.length === 0) {
            delete newList[ingredientKey];
          } else {
            newList[ingredientKey] = {
              ...newList[ingredientKey],
              cocktails: updatedCocktails,
              count: updatedCocktails.length,
            };
          }
        }
      });

      return newList;
    });

    setAddedCocktails((prev) => {
      const newCocktails = { ...prev };
      delete newCocktails[cocktailId];
      return newCocktails;
    });

    return cocktail.name;
  };

  const clearShoppingList = () => {
    setShoppingList({});
    setAddedCocktails({});
  };

  return {
    shoppingList,
    addedCocktails,
    addIngredientsToShoppingList,
    removeCocktailFromShoppingList,
    clearShoppingList,
  };
}
