import { FoodHeader } from "./components/FoodHeader";
import { ActionButton } from "./components/ActionButton";
import { useFoodStore } from "./stores/appStore";
import { useShallow } from "zustand/shallow";
import { FoodItemCard } from "./components/FoodItemCard";

function App() {
  const [
    breakfastMeal,
    lunchMeal,
    dinnerMeal,
    showBreakfastButton,
    showLunchButton,
    showDinnerButton,
    setShowBreakfastButton,
    setShowLunchButton,
    setShowDinnerButton,
  ] = useFoodStore(
    useShallow((s) => [
      s.breakfastMeal,
      s.lunchMeal,
      s.dinnerMeal,
      s.showBreakfastButton,
      s.showLunchButton,
      s.showDinnerButton,
      s.setShowBreakfastButton,
      s.setShowLunchButton,
      s.setShowDinnerButton,
    ])
  );

  return (
    <main className="flex flex-col max-w-3xl overflow-y-auto h-dvh bg-red-500 mx-auto">
      <section className="p-5">
        <FoodHeader title="BreakFast" />
        {showBreakfastButton ? (
          <ActionButton onClick={setShowBreakfastButton} />
        ) : (
          <FoodItemCard foodItem={breakfastMeal} />
        )}
        <FoodHeader title="Lunch" />
        {showLunchButton ? (
          <ActionButton onClick={setShowLunchButton} />
        ) : (
          <FoodItemCard foodItem={lunchMeal} />
        )}
        <FoodHeader title="Dinner" />
        {showDinnerButton ? (
          <ActionButton onClick={setShowDinnerButton} />
        ) : (
          <FoodItemCard foodItem={dinnerMeal} />
        )}
      </section>
    </main>
  );
}

export default App;
