export type Occasion = "Breakfast" | "Lunch" | "Dinner";

export interface FoodItem {
  name: string;
  img?: string;
  servings: number;
  caloriesPerServing: number;
  totalCalories: number;
  occasion: Occasion;
}
