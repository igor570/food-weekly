import { FoodItem } from "../types/FoodItem";

export const FoodItemCard = ({ foodItem }: { foodItem: FoodItem }) => {
  if (!foodItem) return;
  return (
    <div className="w-full bg-green-500 h-fit flex items-center p-5 mt-2">
      <div className="flex flex-1 justify-between">
        <div className="text-xl font-bold">
          {foodItem.name}
          <div className="mt-1">
            <div className="font-normal text-sm">
              Servings: {foodItem.servings}{" "}
            </div>
            <div className="font-normal text-sm">
              Calories Per Serving: {foodItem.caloriesPerServing}{" "}
            </div>
            <div className="font-normal text-sm">
              Total Calories: {foodItem.totalCalories}{" "}
            </div>
          </div>
        </div>
        <img src="./vite.svg" width={100} />
      </div>
    </div>
  );
};
