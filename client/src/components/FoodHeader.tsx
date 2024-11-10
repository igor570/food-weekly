export const FoodHeader = ({ title }: { title: string }) => {
  return (
    <div className="w-full bg-green-500 h-14 flex items-center px-5 mt-5">
      <div className="text-2xl font-bold">{title}</div>
    </div>
  );
};
