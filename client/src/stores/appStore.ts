import { create } from "zustand";
import { FoodItem } from "../types/FoodItem";
import { foodItems } from "../data/data";
import { getMeals } from "../utils/chooseItem";

const {
  breakfast: initialBreakfastMeal,
  lunch: initialLunchMeal,
  dinner: initialDinnerMeal,
} = getMeals(foodItems);

export interface AppState {
  breakfastMeal: FoodItem;
  lunchMeal: FoodItem;
  dinnerMeal: FoodItem;
  showBreakfastButton: boolean;
  showLunchButton: boolean;
  showDinnerButton: boolean;
  setShowBreakfastButton: () => void;
  setShowLunchButton: () => void;
  setShowDinnerButton: () => void;
}

export const useFoodStore = create<AppState>((set) => ({
  breakfastMeal: initialBreakfastMeal,
  lunchMeal: initialLunchMeal,
  dinnerMeal: initialDinnerMeal,

  showBreakfastButton: true,
  showLunchButton: true,
  showDinnerButton: true,

  setShowBreakfastButton: () => set({ showBreakfastButton: false }),
  setShowLunchButton: () => set({ showLunchButton: false }),
  setShowDinnerButton: () => set({ showDinnerButton: false }),
}));
