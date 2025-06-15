import Header from "./components/Header";
import Hangman from "./components/Hangman";
import LetterErrors from "./components/LetterErrors";
import PressedLetters from "./components/PressedLetters";
import Rematch from "./components/Rematch";
import Modal from "./components/UI/Modal";
import { randomWords } from "./words";
import Guessword from "./components/GuessWord";

import { useCallback, useEffect, useState } from "react";

const isOnlyLetters = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

const isCorrectLetter = (words, inputLetter) => words.includes(inputLetter);

function App() {
  const [hangmanGame, setHangmanGame] = useState({
    wrongLetters: [],
    correctLetters: [],
  });

  const [currGuessedWordIdx, setCurrGuessedWordIdx] = useState(0);
  const [isExistingLetter, setisExistingLetter] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const currentGuessedWord = randomWords[currGuessedWordIdx];
  const splittedCurrGuessWords = currentGuessedWord.split("");

  const maxWrongGuesses = 7;

  const isGameOver = hangmanGame.wrongLetters.length >= maxWrongGuesses;
  const isGameWon = splittedCurrGuessWords.every((letter) =>
    hangmanGame.correctLetters.includes(letter)
  );

  const handleCheckLetters = useCallback(
    (inputLetter) => {
      setHangmanGame((prevHangmanGame) => {
        const { correctLetters, wrongLetters } = prevHangmanGame;

        if (
          correctLetters.includes(inputLetter) ||
          wrongLetters.includes(inputLetter)
        ) {
          setisExistingLetter(true);
          return prevHangmanGame;
        }

        const isCorrect = isCorrectLetter(splittedCurrGuessWords, inputLetter);

        return {
          ...prevHangmanGame,
          correctLetters: isCorrect
            ? [...correctLetters, inputLetter]
            : correctLetters,
          wrongLetters: !isCorrect
            ? [...wrongLetters, inputLetter]
            : wrongLetters,
        };
      });
    },
    [splittedCurrGuessWords]
  );

  console.log(splittedCurrGuessWords);

  useEffect(() => {
    if (isGameOver || isGameWon) {
      setIsOpenModal(true);
    }
  }, [isGameOver, isGameWon]);

  useEffect(() => {
    let timeOutId;
    if (isExistingLetter) {
      timeOutId = setTimeout(() => {
        setisExistingLetter(false);
      }, 1500);
    }
    return () => clearTimeout(timeOutId);
  }, [isExistingLetter]);

  useEffect(() => {
    const handleKeyDownn = (e) => {
      const inputKey = e.key;
      if (!isOnlyLetters(inputKey)) return;
      handleCheckLetters(inputKey);
    };

    document.addEventListener("keydown", handleKeyDownn);

    return () => {
      document.removeEventListener("keydown", handleKeyDownn);
    };
  }, [handleCheckLetters]);

  function handleResetGame() {
    setHangmanGame({
      correctLetters: [],
      wrongLetters: [],
    });
    setCurrGuessedWordIdx(
      (prevWordIdx) => (prevWordIdx + 1) % randomWords.length
    );
    setIsOpenModal(false);
  }

  return (
    <>
      {isExistingLetter && <PressedLetters />}
      <Header />

      <Modal isOpen={isOpenModal}>
        <Rematch
          currentWord={currentGuessedWord}
          onReset={handleResetGame}
          gameResult={isGameOver ? "lost" : isGameWon ? "won" : null}
        />
      </Modal>

      <div className="w-[32rem] mx-auto p-5 relative">
        <Hangman step={hangmanGame.wrongLetters.length} />
        {hangmanGame.wrongLetters.length > 0 && (
          <LetterErrors wrongLetters={hangmanGame.wrongLetters} />
        )}
        <Guessword
          guessedWords={splittedCurrGuessWords}
          correctLetters={hangmanGame.correctLetters}
        />
      </div>
    </>
  );
}

export default App;
