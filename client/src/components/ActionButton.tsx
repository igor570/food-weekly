export const ActionButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full flex justify-center" onClick={onClick}>
      <button className="h-14 flex items-center bg-gray-200 mt-5 px-2 rounded-md hover:bg-gray-300 ">
        Roll for Food 🎲
      </button>
    </div>
  );
};
