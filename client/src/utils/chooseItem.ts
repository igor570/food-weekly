import { FoodItem, Occasion } from "../types/FoodItem";

const filterFoodArray = (foodItemArray: FoodItem[], occasion: Occasion) => {
  const foodItems = foodItemArray.filter((item) => item.occasion === occasion);
  return foodItems[Math.floor(Math.random() * foodItems.length)];
};

export const getMeals = (foodItemArray: FoodItem[]) => {
  if (!foodItemArray) throw new Error("foodItemArray is empty");

  const breakfast = filterFoodArray(foodItemArray, "Breakfast");
  const lunch = filterFoodArray(foodItemArray, "Lunch");
  const dinner = filterFoodArray(foodItemArray, "Dinner");

  return { breakfast, lunch, dinner };
};
