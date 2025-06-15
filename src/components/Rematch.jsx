export default function Rematch({ currentWord, onReset, gameResult }) {
  const gameWon = gameResult === "won";

  return (
    <div
      className={`w-96 py-6 px-2 flex flex-col items-center justify-center text-white ${
        gameWon ? "bg-emerald-500" : "bg-red-500"
      } gap-6 rounded-md`}
    >
      <h2 className="text-2xl font-bold">
        {gameWon
          ? "Congratulations! You won! 🎉"
          : "Unfortunately, you lost 😞"}
      </h2>

      {/* Show the word only when the player loses */}
      {!gameWon && (
        <p className="text-xl font-semibold">The word was: {currentWord}</p>
      )}

      <button
        onClick={onReset}
        className={`px-4 py-2 font-semibold bg-slate-100 cursor-pointer hover:bg-slate-200 transition-colors ${
          gameWon ? "text-emerald-500" : "text-red-500"
        }`}
      >
        Play Again
      </button>
    </div>
  );
}
