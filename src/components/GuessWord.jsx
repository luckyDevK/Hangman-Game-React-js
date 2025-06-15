export default function Guessword({ guessedWords, correctLetters }) {
  return (
    <div className="absolute -bottom-10 left-1/6 text-2xl flex gap-2">
      {guessedWords.map((letter, i) => {
        return (
          <span
            key={`${letter}-${i}`}
            className=" w-8 border-b-2 border-blue-500 text-center uppercase font-semibold"
          >
            {correctLetters.includes(letter) ? letter : " "}
          </span>
        );
      })}
    </div>
  );
}
